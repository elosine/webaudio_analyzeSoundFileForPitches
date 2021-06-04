//<editor-fold> << MAKE PANEL >> ------------------------------------------- //
let mkPanel = function({
  w = 100,
  h = 100,
  bgclr = 'black',
  canvasDOMstyle = 'div',
  jsPanel_initialPos = 'center-top',
  jsPanel_xOffset = '0px',
  jsPanel_yOffset = '0px',
  jsPanel_autoposition = 'none',
  onwindowresize = false,
  headerSize = 'xs',
  contentOverflow = 'hidden',
  title = 'myPanel'
} = {
  w: 100,
  h: 100,
  bgclr: 'black',
  canvasDOMstyle: 'div',
  jsPanel_initialPos: 'center-top',
  jsPanel_xOffset: '0px',
  jsPanel_yOffset: '0px',
  jsPanel_autoposition: 'none',
  onwindowresize: false,
  headerSize: 'xs',
  contentOverflow: 'hidden',
  title: 'myPanel'
}) {
  let panelObj = {};
  panelObj['w'] = w;
  panelObj['h'] = h;
  panelObj['bgclr'] = bgclr;
  panelObj['canvasDOMstyle'] = canvasDOMstyle;
  panelObj['jsPanel_initialPos'] = jsPanel_initialPos;
  panelObj['jsPanel_xOffset'] = jsPanel_xOffset;
  panelObj['jsPanel_yOffset'] = jsPanel_yOffset;
  panelObj['jsPanel_autoposition'] = jsPanel_autoposition;
  panelObj['headerSize'] = headerSize;
  panelObj['contentOverflow'] = contentOverflow;
  panelObj['title'] = title;
  let jsPanelObj;
  // CANVAS -------------------------------------- >
  let canvas;
  switch (canvasDOMstyle) {
    case 'div':
      canvas = document.createElement("div");
      canvas.style.width = w.toString() + "px";
      canvas.style.height = h.toString() + "px";
      canvas.style.background = bgclr;
      break;
    case 'svg':
      canvas = document.createElementNS(SVG_NS, "svg");
      canvas.setAttributeNS(null, "width", w);
      canvas.setAttributeNS(null, "height", h);
      canvas.style.backgroundColor = bgclr;
      break;
  }
  panelObj['canvas'] = canvas;
  // MAKE THE JSPANEL ---------------------------- >
  jsPanel.create({
    position: {
      my: jsPanel_initialPos,
      at: jsPanel_initialPos,
      offsetX: jsPanel_xOffset,
      offsetY: jsPanel_yOffset,
      autoposition: jsPanel_autoposition
    },
    contentSize: w.toString() + " " + h.toString(),
    header: 'auto-show-hide',
    headerControls: {
      size: headerSize,
      minimize: 'remove',
      maximize: 'remove',
      close: 'remove'
    },
    contentOverflow: contentOverflow,
    headerTitle: title,
    theme: "light",
    content: canvas,
    resizeit: {
      aspectRatio: 'content',
      resize: function(panel, paneldata, e) {}
    },
    onwindowresize: onwindowresize,
    callback: function() {
      jsPanelObj = this;
    }
  });
  return panelObj;
}
//</editor-fold> >> END MAKE PANEL  ///////////////////////////////////////////


//<editor-fold> << MAKE BUTTON >> ------------------------------------------ //
function mkButton(canvas, w, h, top, left, label, fontSize, action) {
  let btn = document.createElement("BUTTON");
  btn.className = 'btn btn-1';
  btn.innerText = label;
  btn.style.width = w.toString() + "px";
  btn.style.height = h.toString() + "px";
  btn.style.top = top.toString() + "px";
  btn.style.left = left.toString() + "px";
  btn.style.fontSize = fontSize.toString() + "px";
  btn.addEventListener("click", action);
  canvas.appendChild(btn);
  return btn;
}
//</editor-fold> >> MAKE BUTTON  //////////////////////////////////////////////



//









//// SAMPLE SECTIONERS
//<editor-fold> << ANIMATION ENGINE >> ------------------------------------- //
//</editor-fold> >> END ANIMATION ENGINE  /////////////////////////////////////
//<editor-fold>  < ANIMATION ENGINE - UPDATE >           //
//</editor-fold> END ANIMATION ENGINE - UPDATE          END
// SUBSECTION_L1 ------------------------------- >
//<editor-fold> SUBSECTION_L1 ------------------ >
//</editor-fold> SUBSECTION_L1 END
// << SUBSECTION_L2 ---------------------------- >
// << << SUBSECTION_L3 ------------------------- >



//
