var DIN = {
  src: '/sifr/sifr.swf'
};
sIFR.prefetch(DIN);
sIFR.activate();

sIFR.replace(DIN, {
 selector: '#content h1',
 css:[
 '.sIFR-root{font-weight:bold; font-size:24px; letter-spacing: 0.5;}'
 ],
 wmode:'transparent'
});