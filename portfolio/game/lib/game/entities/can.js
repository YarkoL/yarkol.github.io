ig.module(
	'game.entities.can'
	)
.requires(
	'impact.entity'
	)
.defines(function(){	
	EntityCan = ig.Entity.extend({
		zIndex: 999,
		size: {x:8, y:8},
		animSheet: new ig.AnimationSheet( 'media/can.ss.png', 8, 8 ),

		checkAgainst: ig.Entity.TYPE.A,


		init: function( x, y, settings ) {
			this.parent( x, y, settings );
			this.addAnim( 'idle', 0.5, [0,1,2] );
		},
		
		//update: function(){},

		check: function(other){
			if(other instanceof EntityPlayer){
				ig.game.stats.cans ++;
				ig.score += 50;
				this.kill();
			}
		}
	});
});