function loadSlideshow(album, xmlFile, div_id, width, height){
	var so = new SWFObject('/slideshowpro/slideshow.swf', 'slideshow', width, height, '8');
		so.useExpressInstall('/swf/expressinstall.swf');
		so.addParam('FlashVars', "album=" + album + "&xmlFile=" + xmlFile);
		so.write(div_id);
}