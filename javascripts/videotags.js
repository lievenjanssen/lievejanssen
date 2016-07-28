function loadSwf(url, div_id, width, height, bgcolor){
	var so = new SWFObject(url, 'mediaplayer', width, height, '8', bgcolor);
		so.useExpressInstall('/swf/expressinstall.swf');
		so.addParam('menu', 'false');
		so.addParam('wmode', 'transparent');
		so.addParam("allowfullscreen","true");
  	so.addVariable("file","video.flv");
  	so.addVariable("image","video.jpg");
		so.write(div_id);
}
function loadFlv(url, div_id, width, height, bgcolor, pic_url){
	var so = new SWFObject('/swf/mediaplayer.swf', 'mediaplayer', width, height, '8', bgcolor);
		so.useExpressInstall('expressinstall.swf');
		so.addParam('menu', 'false');
		so.addParam('wmode', 'transparent');
		so.addParam("allowfullscreen","true");
  	so.addVariable("file", url);
  	so.addVariable("image","video.jpg");
		so.write(div_id);
}