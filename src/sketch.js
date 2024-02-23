function setup() {
  // These lines are fitting our canvas
  // where we want in the DOM
  // so that we can manipulate its style
  // easier
  let myCanvas = createCanvas(400, 400);
  myCanvas.parent("canvas-parent");
}

function draw() {
  background(220);
  translate(200, 200);

    push();
  
  //ears
  fill(255, 199, 44);
  stroke(245, 179, 0);
  strokeWeight(4);
  arc(-80, -80, 140, 140, PI/2, 0);//left
  arc(80, -80, 140, 140, PI, PI/2);//right
  fill(255, 252, 148);
  arc(-80, -80, 90, 90, 3*PI/4, 0);//inner left
  arc(80, -80, 90, 90, PI, PI/4);//inner right
  
  //body
  fill(255, 199, 44);
  stroke(245, 179, 0);
  strokeWeight(4);
  rect(-160, 100, 330, 330, 110);//outer
  fill(255, 252, 148);
  rect(-105, 140, 220, 220, 110);//inner
  
  //Head
  fill(255, 252, 148);
  stroke(245, 179, 0);
  strokeWeight(4);
  ellipse (0,0, 250, 250);
  
  //eyes
  fill(255, 199, 44);
  noStroke();
  ellipse (-50,-30, 90, 70);//left patch
  ellipse (50,-30, 90, 70);//right patch
  fill(112, 135, 20);
  stroke(255, 252, 148);
  strokeWeight(4);
  ellipse (-50,-30, 30, 30);//left eyeball
  ellipse (50,-30, 30, 30);//right eyeball
  fill(255);
  noStroke();
  ellipse (-45,-35, 8, 8);//left sparkle
  ellipse (45,-35, 8, 8);//right sparkle
  
  //mouth+nose
  fill(255, 252, 148);
  stroke(112, 135, 20);
  arc(0, 70, 100, 40, 0, PI);//mouth
  stroke(112, 135, 20);
  line(0, 60, 0, 90);//nose-mouth line
  fill(112, 135, 20);
  noStroke();
  triangle (40, 25, 0, 60, -40, 25);//nose

  pop();
}
