const CANVAS_W = 800;
const CANVAS_H = 800;

const GRID_W = 40;
const GRID_H = 40;

function setup() {
  createCanvas(CANVAS_W, CANVAS_H);
}

function draw() {
  background(50);

  stroke(255);
  for (let i = 1; i < CANVAS_H / GRID_H; i++)
    line(0, GRID_H * i, CANVAS_W, GRID_H * i);

  for (let i = 1; i < CANVAS_W / GRID_W; i++)
    line(GRID_W * i, 0, GRID_W * i, CANVAS_W);
}
