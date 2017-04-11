ig.module( 
	'game.main' 
)
.requires(
	//'impact.debug.debug',
	'impact.game',
	'impact.font',
	'plugins.font',
	'game.entities.levelexit',
	'game.entities.player',
	'game.entities.crawler',
	'game.entities.shooter',
	'game.levels.1R',
	'game.levels.2R',
	'game.levels.3R',
	'game.levels.4R',
	'game.levels.5R'
)
.defines(function(){

MyGame = ig.Game.extend({

	debug: false,
	
	stats: {cans: 0, lives: 5, levels: 0, time: 0, shots: 0}, 
	gravity: 300, 
	
	font: null,   
	//cansprite: new ig.Image('media/cansprite.png'),
	//lifesprite: new ig.Image('media/lifesprite.png'),
	scoreMatte: new ig.Image('media/scorematte.png'),
	levelTimer: new ig.Timer(),
	txtTimer: null,
	instructTxt: null,
	superTxt: null,
	showStats: false,
	levelExit: null,

	
	init: function() {
		
		ig.score = 0;
		/*
		var scale = Math.floor(ig.system.width/this.lifesprite.width);
		this.lifesprite.resize(scale);
		this.lifesprite.width *= scale;
		this.lifesprite.height *= scale;
		*/
		// Bind keys
		if(ig.ua.mobile){
			this.font = new Font( '15px Jet Set' );
			ig.input.bindTouch( '#buttonLeft', 'left' );
			ig.input.bindTouch( '#buttonRight', 'right' );
			ig.input.bindTouch( '#buttonJump', 'jump' );
			ig.input.bindTouch( '#buttonShoot', 'shoot' );
			ig.input.bindTouch( '#game', 'continue' );
		}else{
			this.font = new Font( '20px Jet Set' );
			ig.input.bind( ig.KEY.LEFT_ARROW, 'left' );
			ig.input.bind( ig.KEY.RIGHT_ARROW, 'right' );
			ig.input.bind( ig.KEY.X, 'jump' );
			ig.input.bind( ig.KEY.C, 'shoot' );
			ig.input.bind(ig.KEY.SPACE, 'continue');
		}
		
		this.clearColor = '#000A1A';
		if (!ig.ua.mobile && this.stats.levels == 0) {
			this.txtTimer = new ig.Timer();
			this.txtTimer.reset();
			this.instructTxt = 'Arrows to move, X to jump, C to shoot';
		}
		
		this.loadLevel( Level1R );

	},
	
	update: function() {		
		//if we are showing stats, don't update until spacebar is pressed
		if(!this.showStats) {
			// Update all entities and BackgroundMaps
			this.sortEntitiesDeferred();
			// camera movement
			var player = this.getEntitiesByType( EntityPlayer )[0];
			if( player ) {
				//console.log(this.screen.x, this.screen.y);
				var MAPWIDTH = 1912;
				var MAPHEIGHT = 320;
				var targetX = player.pos.x - ig.system.width/2;
				var targetY = player.pos.y - ig.system.height/2;
				var deltaX = Math.abs(player.vel.x / 3000) + 0.03;
				var deltaY = Math.abs(player.vel.y / 3000) + 0.03;
					
				if (targetX < 0) {
					targetX = 0;
				}
				if (targetX + ig.system.width > MAPWIDTH) {
					targetX = MAPWIDTH - ig.system.width;
				}
				
				if (targetY < 0) {
					targetY = 0;
				}
				if (targetY + ig.system.height > MAPHEIGHT) {
					targetY = MAPHEIGHT - ig.system.height;
				}
				//console.log(deltaX, deltaY);
				this.screen.x += (targetX - this.screen.x) * deltaX;
				this.screen.y += (targetY - this.screen.y) * deltaY;
			
				if(this.instructTxt) {
					if(this.txtTimer.delta() > 4) {
						this.instructTxt = null;
					}
				}		
			}
			this.parent();
		} else {
			if(ig.input.state('continue')) {
				this.showStats = false;
				this.levelExit.nextLevel();
				this.parent();
			}
		}
	},
	
	draw: function() {
		this.parent();
		/*HUD*/
		var w = ig.system.width;
		var h = ig.system.height;
		//cans left
		if (this.stats.cans < 20) {
			//this.cansprite.draw(3, 3);
			this.font.draw((20 - this.stats.cans).toString() + ' cans left', 5, 3, 'left', '#00fe00' );
		}
		 
		//level 
		this.font.draw("Level " + this.stats.levels, w/2, 3, 'center', '#feaa00');
		//instructions
		if (this.instructTxt) {
			this.font.draw(this.instructTxt, w/2, h - 50, 'center', '#ffff00');
		}
		if(this.superTxt) {
			this.font.draw(this.superTxt, w/2, h - 70, 'center', '#FF7FB6');
		}
		//stats
		if (this.showStats) {
			this.scoreMatte.draw(0,0);
			this.font.draw('Level Complete', w/2, 20, 'center', '#ffff00');
			this.font.draw('Time Bonus: '+ Math.floor(50000 / this.stats.time), w/2, 100,'center', '#ffff00');
			this.font.draw('YOUR SCORE: '+ ig.score, w/2, 150,'center', '#ffffff');
			if(ig.ua.mobile){
				this.font.draw('Touch to continue', w/2, h - 20, 'center', '#ffff00');
			} else {
				this.font.draw('Press Spacebar to Continue', w/2, h - 20, 'center', '#ffff00');
			}
		} else {
			//lives
			/*
			for(var i = 0; i < this.stats.lives; i++) {
				this.lifesprite.draw((w - (this.lifesprite.width + 5) * i) - 25, h - 30);
			}
			*/
			this.font.draw("Lives " + this.stats.lives, w - 10, 3, 'right', '#00fe00');
			//score
			this.font.draw('SCORE ' + ig.score, w/2, h - 15, 'center', '#ffff00');
		}
	},

	toggleStats: function(levelExit) {
		this.stats.time = Math.round(this.levelTimer.delta());
		var timeBonus = Math.floor(50000 / this.stats.time);
		ig.score += timeBonus;
		this.levelExit = levelExit;
		this.showStats = true;
	},

	loadLevel: function(data) {
		this.parent(data);
		this.levelTimer.reset();
		this.stats.levels++;
		this.stats.lives = 5;
		this.stats.cans = 0;
	},

	gameOver: function() {
		//ig.finalStats = ig.game.stats;
		ig.system.setGame(GameOverScreen);
	}
});

StartScreen = ig.Game.extend({
	font20px: new Font( '20px Jet Set' ), 
	font15px: new Font( '15px Jet Set' ), 
	background: new ig.Image('media/startscreen.png'),
	instructTxt: null,
	explanation: new Array(),
	txtTimer: new ig.Timer(),
	//title: new ig.Image('media/game-title.png'),

	init: function() {
		if(ig.ua.mobile){
			ig.input.bindTouch( '#game', 'start' );
			this.instructTxt = 'Touch to start';
		} else {
			ig.input.bind(ig.KEY.SPACE, 'start');
			this.instructTxt = 'Press spacebar to start';
		}
		this.explanation[0] = "You have found an abandoned alien battleship in deep space...";
		this.explanation[1] ="Inside the ship there are many cans of PLURANIUM...";
		this.explanation[2] ="Extremely valuable cosmic substance... ";
		this.explanation[3] ="However... "
		this.explanation[4] = "The cans are closely guarded by the ship's security system...";
		this.explanation[5] = "Good luck...";
	},

	update: function() {

		if(ig.input.pressed('start')){
			ig.system.setGame(MyGame);
		}
		this.parent();
	},

	draw: function() {
		this.parent();
		var n = Math.floor(this.txtTimer.delta());
		this.background.draw(0,0);
		//this.title.draw(ig.system.width/2 - this.title.width/2, 0);

		for (var i = 0; i < n; i++) {
			this.font15px.draw(this.explanation[i], ig.system.width/2 , 150 + i*10 , 'center', '#00ff00');	
			this.font20px.draw(this.instructTxt, ig.system.width/2 , ig.system.height - 30, 'center', 'rgba( 255, 255, 255, '+ i / 20 +' )' );
		}
		if (n > 10) {
			this.txtTimer.pause();
		} 
	}
});

GameOverScreen = ig.Game.extend({

	background: new ig.Image('media/gameover.jpg'),
	font20px: new Font( '20px Jet Set' ), 
	font30px: new Font( '30px Jet Set' ),
	instructTxt: null,

	init: function() {
		if(ig.ua.mobile){
			ig.input.bindTouch( '#game', 'start' );
			this.instructTxt = 'Touch to play again';
		} else {
			ig.input.bind(ig.KEY.SPACE, 'start');
			this.instructTxt = 'Press spacebar to play again';
		}
	},
	update: function() {
		if(ig.input.pressed('start')){
			ig.system.setGame(StartScreen);
		}
		this.parent();
	},
	draw: function() {
		this.parent();
		this.background.draw(0,0);
		var x = ig.system.width/2;
		this.font20px.draw(this.instructTxt, x, ig.system.height-30, 'center', '#ffff00');
		this.font30px.draw("GAME OVER", x, 30, 'center', '#ee00ee');
		this.font30px.draw("Your Score: " + ig.score, x, 100, 'center', '#ffffff');
	} 
});

GameThruScreen = ig.Game.extend({

	background: new ig.Image('media/endscreen.jpg'),
	font20px: new Font( '20px Jet Set' ), 
	font30px: new Font( '30px Jet Set' ), 
	instructTxt: null,
	//stats: {},

	init: function() {
		if(ig.ua.mobile){
			ig.input.bindTouch( '#game', 'start' );
			this.instructTxt = 'Touch to play again';
		} else {
			ig.input.bind(ig.KEY.SPACE, 'start');
			this.instructTxt = 'Press spacebar to play again';
		}
	},
	update: function() {
		if(ig.input.pressed('start')){
			ig.system.setGame(StartScreen);
		}
		this.parent();
	},
	draw: function() {
		this.parent();
		this.background.draw(0,0);
		var x = ig.system.width/2;
		this.font20px.draw(this.instructTxt, x, ig.system.height-30, 'center', '#ff0000');
		this.font20px.draw("YOU MADE IT THROUGH ALL THE LEVELS!!!", x, 30, 'center', '#ee0000');
		this.font20px.draw("CONGRATULATIONS! ", x, 15, 'center', '#000000');
		//this.font20px.draw("", x, 40, 'center', '#ee00ee');
		this.font30px.draw("Your Score: " + ig.score, x,  ig.system.height-60, 'center', '#0000ff');
	} 
});

// Start the Game 
if( ig.ua.iPad ) {
	ig.main('#canvas', MyGame, 60, 240, 160, 2);
} else if( ig.ua.mobile) {	
	ig.main('#canvas', MyGame, 60, 160, 160, 2 * ig.ua.pixelRatio);
	 // Set the CSS size of the canvas to 320 (160, scaled up 2x)
    // "CSS pixels" will be scaled to native screen pixels by 
    // the browser internally through the pixelRatio
    //ig.system.canvas.style.width = '320px';
    //ig.system.canvas.style.height = '320px';

} else {
	ig.main('#canvas', StartScreen, 60, 320, 240, 2);
	//ig.main('#canvas', StartScreen, 60, 160, 160, 1);
}

});
