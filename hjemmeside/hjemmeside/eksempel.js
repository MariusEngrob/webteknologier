let vRed = 0;
let vGreen = 0;
let vBlue = 0;

function mouseDragged(){
  stroke(vRed, vGreen, vBlue);
  line(pmouseX, pmouseY, mouseX, mouseY);
}

function colorRed(){
  vRed = 255;
  vGreen = 0;
  vBlue = 0;
}

function colorBlue(){
  vRed = 0;
  vGreen = 0;
  vBlue = 255;
}
