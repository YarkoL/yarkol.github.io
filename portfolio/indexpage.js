/*portfolio index ---@jle 5.1.2013 
	-  added cursor animation 8.1.13
	- changed text & sections 5.4.17
	*/
var stage;
var cursor;
var progress;
var r = 0; 
var labelsSmall =  new Array("Play my","Read my","Marvel at my","Get bored with my", "Laugh at my", "");
var labels = new Array("GAME","COMICS","GRAPHICS","ANIMATION", "CV", "Contact");
var images = new Array(); 
var links = new Array("game","comics","illustration","animation","CV","contact");

function init() {
	//initialize stage
	var canvas = document.getElementById("c");
	stage = new createjs.Stage(canvas);
	stage.enableMouseOver();
	/*PRELOADER*/
	progress = new createjs.Text("Loaded ", "20px Arial","yellow"); 
	progress.x = canvas.width / 3;
	progress.y = canvas.height / 2;
	stage.addChild(progress);
	manifest = [
				{src:"./graphics/kuutio.jpg", id:"kuutio"},
				{src:"./graphics/pallo.jpg", id:"pallo"},
				{src:"./graphics/sylinteri.jpg", id:"sylinteri"},
				{src:"./graphics/tuutti.jpg", id:"tuutti"},
				{src:"./graphics/green.jpg", id:"green"},
				{src:"./graphics/blurred.jpg", id:"blurred"},
				{src:"./graphics/tv.jpg", id:"tv"},
				{src:"./graphics/handcursor.png", id:"cursor"}
			];
	var preloader = new createjs.PreloadJS();
	preloader.onProgress = handleProgress;
	preloader.onFileLoad = handleFileLoad;
    preloader.onComplete = handleComplete;
    preloader.loadManifest(manifest);
}

function handleProgress(evt) {
    //get the percentage of the loading
	progress.text = "Loaded: " + Math.round(evt.loaded * 100) + "% ";
	stage.update();
}
 
function handleFileLoad(evt) {
	//add image path to images array
	images.push(evt.src); 
}  
 
function handleComplete(evt) {
	stage.removeChild(progress);
	renderScreen();
}
 
function renderScreen() {
	/*BACKGROUND IMAGE*/
	var img_bg = new createjs.Bitmap("graphics/tv.jpg"); 
	stage.addChild(img_bg);
	
	/*CUSTOM CURSOR*/
	cursor = new createjs.Bitmap("graphics/handcursor.png");
	cursor.regX = (cursor.image.width)/2;
	cursor.regY = (cursor.image.height)/2;
	stage.addChild(cursor);
	
	/*BUTTON COLUMN*/
	var buttonsX = 400; 
	var buttonsY = 30;
	//distance between buttons
	var distance = 60; 
	for (var i = 0; i < labels.length; i++) {
		//button background 
		var btnArea = new createjs.Shape(); 
		btnArea.graphics.beginFill("#0f0").drawRect(0,0,170,35);
		btnArea.visible = false; 
		//button text, what the user sees
		var labelSmall = new createjs.Text(labelsSmall[i], "14px Gnatfont","white"); 
		var label = new createjs.Text(labels[i], "20px Gnatfont","white"); 
		//clickable container of graphics and data
		var button = new createjs.Container(); 
		button.addChild(btnArea,labelSmall);
		labelSmall.y = 20;
		button.addChild(btnArea,label);
		label.y = 35;
		button.img = new createjs.Bitmap(images[i]);
		button.link = (labels[i] != "Contact") ? links[i] + "/index.html" : "contact.php";
		//button.link = (labels[i] != "Contact") ? links[i] : "contact.php";
		button.x = buttonsX;
		button.y = (labels[i] != "Contact") ? buttonsY + i*distance : 400;
		button.onMouseOver = mouseOn;
		button.onMouseOut = mouseOut;
		button.onClick = clickHandler;
		stage.addChild(button);
	}
	stage.update();
	//ticker to drive cursor animation
	createjs.Ticker.setFPS(30);
	createjs.Ticker.addListener(cursorAnimate);	
}

function cursorAnimate() {
	/*CALCULATE ROTATION*/
	//gradual damping factor 
	var damp = .94;
	//rotation speed
	var speed = .3;	
	//find out velocities vx,vy
	var oldX = cursor.x; 
	var oldY = cursor.y;	
	var vx = stage.mouseX - oldX; 
	var vy = stage.mouseY - oldY;
	//if theres been movement, get rotation
	if( vx != 0 || vy != 0 )  r = Math.atan2(vx,vy)*180/Math.PI;
	/*ANIMATE*/
	if (stage.mouseInBounds) {
		//mouse inside canvas, so do animation
		cursor.visible = true;
		cursor.x = stage.mouseX;
		cursor.y = stage.mouseY;
		cursor.rotation += r * speed;
		r *= damp;	
	} else {
		//mouse outside canvas
		cursor.visible = false;
	}
	stage.update();
}

function mouseOn(evt) {
	//glue the cursor to the button
	cursor.y = evt.target.y + 50;
	cursor.rotation = 30;
	createjs.Ticker.setPaused(true);
	//highlight button label 
	evt.target.children[2].color = "red"; 
	//change background image
	stage.addChildAt(evt.target.img,1); 
	stage.update();
}

function mouseOut(evt) {
	//restore cursor animation
	createjs.Ticker.setPaused(false);
	//restore button label 
	evt.target.children[2].color = "white"; 
	//restore background image
	stage.removeChild(evt.target.img); 
	stage.update();
}

function clickHandler(evt) {
	//navigate to subfolder
	window.location.href = evt.target.link; 
}
