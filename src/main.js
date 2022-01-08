const CANVAS_W = 480;
const CANVAS_H = 920;

const GRID_W = 40;
const GRID_H = 40;

const ROWS = CANVAS_H / GRID_H;
const COLS = CANVAS_W / GRID_W;

let x, y;
let lastDirection;

function setup() {
  // frameRate(2);
  createCanvas(CANVAS_W, CANVAS_H);
  x = 10;
  y = 10;

  console.log(COLS);
  console.log(ROWS);
}

function draw() {
  createGrid();
  drawBox(x, y);

  go();
}

const createGrid = () => {
  background(50);

  stroke(255);
  for (let i = 1; i < ROWS; i++) line(0, GRID_H * i, CANVAS_W, GRID_H * i);
  for (let i = 1; i < COLS; i++) line(GRID_W * i, 0, GRID_W * i, CANVAS_H);
};
