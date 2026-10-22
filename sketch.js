function setup() {
  let cnv = createCanvas(800, 784);
  let x = (windowWidth - width) / 2;
  let y = (windowHeight - height) / 2;
  cnv.position(x, y);
  background('#F0F2ED');
  frameRate(2);
}

function draw() {
  let colors = ['#ee2400', '#ee2400', '#272c7d', '#ee2400'];
  let c1 = random(colors);
  let c2 = random(colors);
  let c3 = random(colors);
  let c4 = random(colors);

  fill(c1);
  rect(0, 0, 180, 155);

  fill(c2);
  rect(180, 0, 180, 155);

  fill(c3);
  rect(0, 155, 180, 155);

  fill(c4);
  rect(180, 155, 180, 155);

  strokeWeight(0);
  fill('#fddc00');
  rect(0, 516, 77, 267);

  fill('#272c7d');
  rect(366, 518, 251, 227);

  strokeWeight(16);
  line(0, 317, 800, 322);

  strokeWeight(15);
line(0, 508, 800, 513);

strokeWeight(12);
line(365, 748, 612, 747);

strokeWeight(9);
line(81, 513, 78, 784);

line(614, 513, 614, 784);

line(367, 0, 363, 784);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
