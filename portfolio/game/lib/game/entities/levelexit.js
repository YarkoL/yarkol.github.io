
ig.module(
	'game.entities.levelexit'
	)
.requires(
	'impact.entity'
	)
.defines(function(){	
	EntityLevelexit = ig.Entity.extend({
		
		size: {x:16, y:32},
		animSheet: new ig.AnimationSheet( 'media/exit.ss.png', 16, 32 ),	
		level: null,
		checkAgainst: ig.Entity.TYPE.A,
		collides: ig.Entity.COLLIDES.FIXED,

		init: function( x, y, settings ) {
			this.parent( x, y, settings );
			this.addAnim( 'idle', 0.2, [1] );
			this.addAnim( 'open', 0.2, [0,1] );
		},
		
		update: function(){
			if(ig.game.stats.cans >= 20) {
				this.currentAnim = this.anims.open;
			}
			this.parent();
		},

		check: function(other){
			if(other instanceof EntityPlayer){
				
				if(this.currentAnim == this.anims.open) {
					other.endSuperPower();
					ig.game.toggleStats(this);
				} else {
					ig.game.instructTxt = 'You cannot exit without getting all the cans!';
					ig.game.txtTimer.reset();
				}
			}
		},

		nextLevel: function() {
			if(this.level){
				var levelName = this.level.replace(/^(Level)?(\w)(\w*)/, function(m,l,a,b){ return a.toUpperCase() + b; });
				ig.game.loadLevelDeferred(ig.global['Level'+levelName]);
			} else {
				//all the levels have been played!
				ig.system.setGame(GameThruScreen);
			}
		}		
	});
});