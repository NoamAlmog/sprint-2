'use strict';

var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');


function renderMeme(url) {
  var meme_image = new Image();
  meme_image.src = url;
  meme_image.onload = function() {
    
    let modalHeight = document.querySelector('.modal').offsetHeight;
    
    let imageRatio = meme_image.width/meme_image.height;
    const h = modalHeight * 0.5;
    let w = h*imageRatio;

    canvas.width = w;
    canvas.height = h;

    ctx.drawImage(meme_image, 0, 0, w, h);
  }
}


function downloadCanvasImage() {
  const data = myCanvas.toDataURL();

  var elLink = document.querySelector('#download-canvas');
  
  elLink.href = data;
  elLink.download = 'img.jpg';
  elLink.click();
}

window.onload = function(){
    var meme_image = new Image();
    meme_image.onload = function(){
        context.drawImage(meme_image, 10, 10);
        context.font = "40pt Calibri";
        context.fillText("My TEXT!", 20, 20);
    };
    meme_image.src = "darth-vader.jpg"; 
};

