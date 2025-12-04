function setup() {
  // Create the canvas
 createCanvas(windowWidth, windowHeight);

  // Set background to black
  background(0)
  
  // Set width of the lines
  strokeWeight(5);

  // Set color mode to hue-saturation-brightness (HSB)
  colorMode(HSB);

  // Set screen reader accessible description
  describe('A blank canvas where the user draws by dragging the mouse');
}

function mouseDragged() {
  // Set the color based on the mouse position, and draw a line
  // from the previous position to the current position
  let lineHue = mouseY%360;
  stroke(lineHue, 70, 70);
  ellipse(mouseX, mouseY, 20, 20);
}