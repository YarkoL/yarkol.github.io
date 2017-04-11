ig.module(
	'game.entities.shooter'
)
.requires(
	'impact.entity'
)
.defines(function(){
	
EntityShooter = ig.Entity.extend({
	size: {x: 16, y: 16},
	maxVel: {x: 0, y: 50},
	friction: {x: 0, y: 0},
	//gravityFactor: 0,
	hit: false,
	type: ig.Entity.TYPE.B, // Evil enemy group
	checkAgainst: ig.Entity.TYPE.A, // Check against friendly
	collides: ig.Entity.COLLIDES.PASSIVE,

	health: 10,
	flip: false,
	shootTimer: null,
	shootDelay: {},
	powersource: false,
	
	animSheet: new ig.AnimationSheet( 'media/shooter.ss.png', 16, 16),
	
	init: function( x, y, settings ) {
		this.parent( x, y, settings );
		this.shootTimer = new ig.Timer();
		this.shootTimer.reset();
		this.addAnim( 'idle', 0.1, [0,1,2,3] );
	},
	
	update: function() {	
		var ydir = this.flip ? -1 : 1;
		var player = ig.game.getEntitiesByType( EntityPlayer )[0];
		this.vel.y = this.maxVel.y * ydir;
	
		if(this.shootTimer.delta() > this.shootDelay && player){
			if (player.pos.x <= this.pos.x ) {
				ig.game.spawnEntity( EntityShooterBullet, this.pos.x, this.pos.y, {flip:true} );
			} else {
				ig.game.spawnEntity( EntityShooterBullet, this.pos.x, this.pos.y, {flip:false} );
			}
			this.shootTimer.reset();
		}
		this.parent();
	},
	
	
	handleMovementTrace: function( res ) {
		this.parent( res );
		// collision with a wall? return!
		if( res.collision.y ) {
			this.flip = !this.flip;
		}
	},	
	
	check: function( other ) {
		other.receiveDamage( 10, this );
	},

	receiveDamage: function( amount, other  ) {
		if (other instanceof EntityFastBullet) {
			this.powersource = true;
		}
		ig.game.spawnEntity(EntityShooterExplosion, this.pos.x, this.pos.y, {powersource: this.powersource});
		ig.score += Math.floor((Math.random()*100)) + 100;
		this.kill();
	}

});

EntityShooterBullet = ig.Entity.extend({
		size: {x: 7, y: 2},
		animSheet: new ig.AnimationSheet('media/shooterbullet.ss.png', 7, 2),
		maxVel: {x: 120, y: 0},
		flip: false,
		type: ig.Entity.TYPE.NONE,
		checkAgainst: ig.Entity.TYPE.A,
		collides: ig.Entity.COLLIDES.PASSIVE,	


		init: function(x, y, settings) {
			this.flip = settings.flip;
			this.parent(x + (this.flip ? -4 : 8), y+8, settings);
			this.vel.x = this.accel.x = (this.flip ? -this.maxVel.x : this.maxVel.x);
			this.addAnim('idle', 0.2, [0]);
			this.addAnim('bump', 0.2, [1,2]);
		},

		handleMovementTrace: function( res ){
			this.parent( res );
			if ( res.collision.x || res.collision.y ) {
				this.currentAnim = this.anims.bump;
			}
		},

		check: function( other ) {
			other.receiveDamage(10, this);
			this.currentAnim = this.anims.bump;
		},

		update: function() {
			if(this.anims.bump.loopCount > 0){
				this.kill();
			}else{
				this.parent();
			}
		}
	});

	EntityShooterExplosion = ig.Entity.extend({
		size: {x: 16, y: 16},
		animSheet: new ig.AnimationSheet('media/explosion.ss.png', 16, 16),
		powersource: false,
				
		init: function(x, y, settings) {
			this.parent( x, y, settings );
			this.addAnim('idle', 0.03, [0,1,2,3,4,5,6,7]);
		},

		update: function() {
			if(this.anims.idle.loopCount > 0){
				if(this.powersource) {
					ig.game.spawnEntity(EntityPowersource, this.pos.x, this.pos.y);
				}
				this.kill();
			}else{
				this.parent();
			}
		}
	});

	EntityPowersource = ig.Entity.extend({
		size: {x: 16, y: 16},
		animSheet: new ig.AnimationSheet('media/powersource.ss.png', 16, 16),
		gravityFactor: 0,
		type: ig.Entity.TYPE.NONE,
		checkAgainst: ig.Entity.TYPE.A,
		collides: ig.Entity.COLLIDES.PASSIVE,	

				
		init: function(x, y, settings) {
			this.parent( x, y, settings );
			this.addAnim('idle', 0.09, [0,1,2,3,4,5]);
		},

		update: function() {
			this.parent();
		},

		check: function( other ) {
			if(other instanceof EntityPlayer){
				other.giveSuperPower();
				this.kill();
			}
		}
	});

});