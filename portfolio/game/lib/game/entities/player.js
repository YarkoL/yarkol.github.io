ig.module(
	'game.entities.player'
)
.requires(
	'impact.entity'
)
.defines(function(){

	EntityPlayer = ig.Entity.extend({
		
		// The players (collision) size is a bit smaller than the animation
		// frames, so we have to move the collision box a bit (offset)
		size: {x: 8, y:14},
		offset: {x: 4, y: 2},
		
		maxVel: {x: 50, y: 200},
		friction: {x: 600, y: 0},
		invincible: true,
		invincibleDelay: 2,
		invincibleTimer: null,
		superPower: false,
		superTimer: null,
		superTimerDelay: 10,

		type: ig.Entity.TYPE.A, // Player friendly group
		checkAgainst: ig.Entity.TYPE.NONE,
		collides: ig.Entity.COLLIDES.PASSIVE,
		
		animSheet: new ig.AnimationSheet( 'media/player.ss.png', 16, 16 ),	
		
		// These are our own properties. They are not defined in the base
		// ig.Entity class. We just use them internally for the Player
		flip: false,
		accelGround: 400,
		accelAir: 200,
		jump: 180,
		
		init: function( x, y, settings ) {
			this.parent( x, y, settings );
			this.invincibleTimer = new ig.Timer();
			this.superTimer = new ig.Timer();
			this.makeInvincible();
			//this.pos.x = 1800;
			//this.pos.y = 110;
			// Add the animations
			this.setUpAnimation(0);
		},

		setUpAnimation: function(offset) {
			this.addAnim( 'idle', 1, [0 + offset] );
			this.addAnim( 'run', 0.07, [0 + offset,1 + offset,2 + offset,3 + offset,4 + offset,5 + offset] );
			this.addAnim( 'jump', 0.05, [6 + offset,7 + offset,8 + offset] );
			this.addAnim( 'fall', 0.4, [9 + offset,10 + offset] );
		},
		
		makeInvincible: function() {
				this.invincible = true;
				this.invincibleTimer.reset();
			},

		giveSuperPower: function() {
			this.superPower = true;
			this.maxVel.x = 100;
			//this.maxVel.y = 400;
			//this.jump = 300;
			this.setUpAnimation(12);
			this.superTimer.reset();
		},	

		endSuperPower: function() {
			this.superPower = false;
			this.maxVel.x = 50;
			ig.game.superTxt = null;
			//this.maxVel.y = 400;
			//this.jump = 180;
			this.setUpAnimation(0);
		},	

		receiveDamage: function(amount, from){
				if(this.invincible || this.superPower){
					return;
				}
				this.parent(amount, from);
			},
		draw:function(){
			if(this.invincible){
				this.currentAnim.alpha = this.invincibleTimer.delta()/this.invincibleTimer * 1;
			}
			this.parent();
		},
		
		update: function() {
			// move left or right
			var accel = this.standing ? this.accelGround : this.accelAir;
			if( ig.input.state('left') ) {
				this.accel.x = -accel;
				this.flip = true;
			}
			else if( ig.input.state('right') ) {
				this.accel.x = accel;
				this.flip = false;
			}
			else {
				this.accel.x = 0;
			}
			
			
			// jump
			if( this.standing && ig.input.pressed('jump') ) {
				this.vel.y = -this.jump;
			}
			if( this.superPower && ig.input.pressed('jump') ) {
				this.vel.y = -this.jump;
			}
			
			// shoot
			if( ig.input.pressed('shoot') ) {
				if (this.standing) {
					ig.game.spawnEntity( EntityBullet, this.pos.x, this.pos.y, {flip:this.flip} );
				} else {
					ig.game.spawnEntity( EntityFastBullet, this.pos.x, this.pos.y, {flip:this.flip} );
				}
				ig.game.stats.shots++;
			}
			
			// set the current animation, based on the player's speed
			if( this.vel.y < 0 ) {
				this.currentAnim = this.anims.jump;
			}
			else if( this.vel.y > 0 ) {
				this.currentAnim = this.anims.fall;
			}
			else if( this.vel.x != 0 ) {
				this.currentAnim = this.anims.run;
			}
			else {
				this.currentAnim = this.anims.idle;
			}
			
			this.currentAnim.flip.x = this.flip;
			
			if(this.invincibleTimer.delta() > this.invincibleDelay ){
				this.invincible = false;
				this.currentAnim.alpha = 1;
			}
			if(this.superPower) {
				ig.game.superTxt = "YOU HAVE SUPERPOWERS FOR " +
				 Math.floor(this.superTimerDelay - this.superTimer.delta()) + " secs";
				if(this.superTimer.delta() > this.superTimerDelay ){
					this.endSuperPower();
				}
			}

			
			//if (this.vel.y > 0) console.log(this.vel.y);
			// move!
			this.parent();
		},

		kill: function() {
			this.parent();
			//ig.game.instructTxt = 'Ouch!!';
			//ig.game.txtTimer.reset();
			ig.game.spawnEntity(EntityPlayerDeath, this.pos.x, this.pos.y);
		}
	});

	EntityBullet = ig.Entity.extend({
		size: {x: 7, y: 4},
		animSheet: new ig.AnimationSheet('media/bullet_yellow.ss.png', 7, 4),
		maxVel: {x: 250, y: 0},
		flip: false,
		type: ig.Entity.TYPE.NONE,
		checkAgainst: ig.Entity.TYPE.B,
		collides: ig.Entity.COLLIDES.PASSIVE,		

		init: function(x, y, settings) {
			this.flip = settings.flip;
			this.parent(x + (this.flip ? -4 : 8), y+6, settings);
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
			other.receiveDamage(0, this);
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

	EntityFastBullet = ig.Entity.extend({
		size: {x: 7, y: 4},
		animSheet: new ig.AnimationSheet('media/bullet_green.ss.png', 7, 4),
		maxVel: {x: 400, y: 0},
		flip: false,
		type: ig.Entity.TYPE.NONE,
		checkAgainst: ig.Entity.TYPE.B,
		collides: ig.Entity.COLLIDES.PASSIVE,		

		init: function(x, y, settings) {
			this.flip = settings.flip;
			this.parent(x + (this.flip ? -4 : 8), y+6, settings);
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
			other.receiveDamage(0, this);
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

	EntityPlayerDeath = ig.Entity.extend({
		animSheet: new ig.AnimationSheet( 'media/playerdeath.ss.png', 16, 16 ),
		deathTimer: null,
		init: function(x, y, settings) {
			this.flip = settings.flip;
			this.parent(x, y, settings);
			this.addAnim('idle', 0.09, [0,1]);
			//this.addAnim('fall', 0.1, [3]);
			this.deathTimer = new ig.Timer();
		},
		update: function() {
			this.parent();
			if(this.deathTimer.delta() > 1){
					this.kill();
			}	
			/*
			if(this.currentAnim != this.anims.fall) {
				if(this.deathTimer.delta() > 5 ){
					this.currentAnim = this.anims.fall;
				}	
			} else {
				if(this.deathTimer.delta() > 8){
					this.kill();
				}	
			}
			*/	
		},
		kill: function() {
			this.parent();
			if(!ig.game.debug) ig.game.stats.lives --;
			if(ig.game.stats.lives <= 0) {
				ig.game.gameOver();
			} else {
				ig.game.spawnEntity(EntityPlayer, this.pos.x, this.pos.y);
			}	
		}

	});
});
