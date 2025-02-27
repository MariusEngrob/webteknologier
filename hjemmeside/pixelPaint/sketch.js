let img;
let vRed = 0;
let vGreen = 0;
let vBlue = 0;
let slider;

document.documentElement.style.setProperty("--vRed", vRed);
document.documentElement.style.setProperty("--vGree", vGreen);
document.documentElement.style.setProperty("--vBlue", vBlue);

function preload() {
  img = loadImage('billede.jpg', img => {
    console.log('Image loaded successfully');
  }, err => {
    console.error('Failed to load image', err);
  });
}

function setup() {
  w = img.width;
  h = img.height;
  createCanvas(w,h);
  noStroke();
  image(img,0,0);
  
  slider = createSlider(1,25,5);
  slider.position(20,h+30);
  slider.size(300);

}

function draw() {
  var stroke = slider.value();
  strokeWeight(stroke);
}

function mouseClicked(){
  stroke(vRed, vGreen, vBlue);
  line(pmouseX, pmouseY, mouseX, mouseY);
}

function mouseDragged(){
  stroke(vRed, vGreen, vBlue);
  line(pmouseX, pmouseY, mouseX, mouseY);
}


function save(){
  saveCanvas();
}

function CLEAR(){
  clear();
  image(img,0,0)
}


// Farver
function colorRed(){
  vRed = 255;
  vGreen = 0;
  vBlue = 0;
}
function colorOrange(){
  vRed = 255;
  vGreen = 127;
  vBlue = 0;
}
function colorYellow(){
  vRed = 255;
  vGreen = 255;
  vBlue = 0;
}
function colorGreen(){
  vRed = 0;
  vGreen = 255;
  vBlue = 0;
}
function colorBlue(){
  vRed = 0;
  vGreen = 0;
  vBlue = 255;
}
function colorPurple(){
  vRed = 127;
  vGreen = 0;
  vBlue = 255;
}
function colorPink(){
  vRed = 255;
  vGreen = 0;
  vBlue = 255;
}
function colorWhite(){
  vRed = 255;
  vGreen = 255;
  vBlue = 255;
}
function colorBlack(){
  vRed = 0;
  vGreen = 0;
  vBlue = 0;
}
function colorGray(){
  vRed = 137;
  vGreen = 137;
  vBlue = 137;
}