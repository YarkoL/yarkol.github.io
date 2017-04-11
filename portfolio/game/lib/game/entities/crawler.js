ig.module(
	'game.entities.crawler'
)
.requires(
	'impact.entity'
)
.defines(function(){
	
EntityCrawler = ig.Entity.extend({
	size: {x: 16, y: 16},
	maxVel: {x: 100, y: 400},
	friction: {x: 150, y: 0},
	
	hit: false,
	type: ig.Entity.TYPE.B, // Evil enemy group
	checkAgainst: ig.Entity.TYPE.A, // Check against friendly
	collides: ig.Entity.COLLIDES.PASSIVE,
	
	health: 10,
	speed: 18,
	flip: false,
	
	animSheet: new ig.AnimationSheet( 'media/crawler.ss.png', 16, 16),
	
	init: function( x, y, settings ) {
		this.parent( x, y, settings );
		this.addAnim( 'crawl', 0.09, [0,1,2] );
	},
	
	
	update: function() {
		
		if (this.hit) {
			var xdir = this.flip ? -10 : 10;
			this.vel.x = this.speed * xdir;
			if( !this.standing || this.pos.y > 250){
				this.hit = false;
			}

		} else {
			// near an edge? return!
			if( !ig.game.collisionMap.getTile(
					this.pos.x + (this.flip ? + 1 : this.size.x - 1),
					this.pos.y + this.size.y+1
				)){
					this.flip = !this.flip;
				}
				var xdir = this.flip ? -1 : 1;
				this.vel.x = this.speed * xdir;
			}
			
		this.currentAnim.flip.x = this.flip;
		this.parent();
	},
	
	
	handleMovementTrace: function( res ) {
		this.parent( res );
		
		// collision with a wall? return!
		if( res.collision.x ) {
			this.flip = !this.flip;
		}
	},	
	
	check: function( other ) {
		/*
		if (other.pos.y + other.size.y - 4 < this.pos.y) {
			this.kill();	
		} else {
			other.receiveDamage( 10, this );
		}
		*/	
		other.receiveDamage( 10, this );
	},

	receiveDamage: function( amount, other  ) {
		this.flip = other.flip;
		this.hit = true;
		this.parent(amount, other);
	}

});

});