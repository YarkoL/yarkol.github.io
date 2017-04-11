<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<?php $dir = basename(getcwd()); ?>
<html>
<head>
	<title><?php print $title; ?></title>
	<link href="../style.css" rel="stylesheet" type="text/css" />
</head>
<body>
	
	<div id="splash">
	<?php if ( $dir =='comics' ) { ?>
		<a href = "<?php print $target; ?>">
		<img src="<?php print $img; ?>" alt="<?php print $alt; ?>"/>
		</a>
	<?php } else if ($dir =='code' || $dir == 'animation' ) {  ?>	
		<object data="<?php print $swf; ?>" type="application/x-shockwave-flash" width="640" height="420">
			<param name="movie" value="<?php print $swf; ?>">	
		</object>
	<?php } else if ($dir =='flv') { ?>	
		<object type="application/x-shockwave-flash" data="player_flv_mini.swf" width="<?php print $width; ?>" height="<?php print $height; ?>">
			<param name="movie" value="player_flv_mini.swf" />
			<param name="allowFullScreen" value="true" />
			<param name="FlashVars" value="flv=<?php print $flv; ?>&amp;width=<?php print $width; ?>&amp;height=<?php print $height; ?>&amp;buffer=20&amp;autoload=1&amp;autoplay=1" />
		</object>
	<?php }  else if ( $dir == '3d') { ?>
		<img src="<?php print $img; ?>" alt="<?php print $alt; ?>"/>
	<?php }?>	
	</div>
	<p/>
	<div id="txtblock" class="center">
		<?php print $txt; ?>
	</div>
	<div id="leftblock">
		<a href ="<?php if ($dir =='flv') print '../animation/'; ?>index.html">
			<img src="../back.png" alt="back" />
		</a>
	</div>
	<div id="rightblock">
		<a href ="../index.html">
			<img src="../up.png" alt="home" />
		</a>
	</div>
</body>
</html>