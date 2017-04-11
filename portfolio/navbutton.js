
(function(w){ 
	
	//constructor
	function NavButton(txt) {
		this.rectShape = new createjs.Shape(); //Rectangle(430,45,100,24);
		rectShape.graphics.beginFill("#000").drawRect(0,0,150,28);
		rectShape.x = 430;
		rectShape.y = 45;
		rectShape.alpha = 0.01;
		this.txt = new createjs.Text(txt, "24px GNATFONT","white");
		txt.x = 430;
		txt.y = 45;
	}
	//method
	NavButton.onMouseOver = function(e) {
		//stage.addChildAt(img_green,1);
		this.txt.color = "red";
		stage.update();
	}

	//w.NavButton = NavButton; 

})(window); 


