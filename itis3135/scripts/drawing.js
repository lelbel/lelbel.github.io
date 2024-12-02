//implementation of an example from the p5.js website 
function setup() {
    // Create the canvas
    createCanvas(710, 400);
  
    // Set background to black
    background(0);
  
    // Set width of the lines
    strokeWeight(5);
  
    // Set color mode to hue-saturation-brightness (HSB)
    colorMode(HSL);
  
    // Set screen reader accessible description
    describe('A blank canvas where the user draws by dragging the mouse');
  }
  
  function mouseDragged() {
    // Set the color based on the mouse position, and draw a line
    // from the previous position to the current position
    let lineHue = mouseX - mouseY;
    stroke(lineHue, 90, 90);
    line(pmouseX, pmouseY, mouseX, mouseY);
  }