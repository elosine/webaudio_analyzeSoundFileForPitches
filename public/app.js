let controlPanel = mkPanel({
  w: 500,
  onwindowresize: true,
  jsPanel_initialPos: 'left-top'
});
let actx;
let initAudioFunc = function() {
  aCtx = new (window.AudioContext || window.webkitAudioContext) ();

}
let initAudioBtn = mkButton(controlPanel.canvas, 60, 52, 0, 0, 'Init Audio', 14, initAudioFunc);
