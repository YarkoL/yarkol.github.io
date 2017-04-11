<!doctype html>

<html lang="en">
	<head>
		<meta charset="utf-8" />
		<title><?php print $title; ?></title>
		<link href="../style.css" rel="stylesheet" type="text/css" />
		<script type="text/javascript">
			var showCanvas;
			var showCanvasCtx;
			var img = document.createElement("img");
			var link = document.getElementById('link');
			var images = [<?php print $assets ?>];
			var links = [<?php print $links ?>];
			var current = 0;

			function init() {
				showCanvas = document.getElementById('showCanvas');
				showCanvasCtx = showCanvas.getContext('2d');
				img.setAttribute('width','640');
				img.setAttribute('height','420');
				switchImg();
				setInterval(switchImg,5000);
			}
			function switchImg() {
				img.setAttribute('src','data1/images/' + images[current++]);
				link.setAtttribute('href', links[current++]);
				img.onload = function() {
					if (current > images.length)
						current = 0;
				}
				showCanvasCtx.drawImage(img,0,0,640,420);
			}
		</script>
	</head>
	<body onload="init();">
		<div id = "splash">
			<a id="link">
			<canvas id='showCanvas' width='640' height='420'>
			</canvas>
			</a>
		</div>
	</body>
</html>
