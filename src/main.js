const CANVAS_W = 600;
const CANVAS_H = 800;

const GRID_W = 40;
const GRID_H = 40;

const ROWS = CANVAS_H / GRID_H;
const COLS = CANVAS_W / GRID_W;

let x, y;

const createGrid = () => {
  background(50);

  stroke(255);
  for (let i = 1; i < ROWS; i++) line(0, GRID_H * i, CANVAS_W, GRID_H * i);
  for (let i = 1; i < COLS; i++) line(GRID_W * i, 0, GRID_W * i, CANVAS_H);
};

const dRect = (x, y) => {
  noStroke();
  fill(100, 200, 100);
  rect(x * GRID_W, y * GRID_H, GRID_W, GRID_H);

  // DEBUG:
  // textSize(16);
  // fill(202, 0, 0);
  // text(`x: ${x}, y: ${y}`, x * GRID_W, y * GRID_H);
};

function setup() {
  frameRate(2);
  createCanvas(CANVAS_W, CANVAS_H);
  x = 10;
  y = 10;

  console.log(COLS);
  console.log(ROWS);
}

function draw() {
  createGrid();
  dRect(x, y);

  go();

  // const direction = console.log(Math.round(random(1, 4)));
}

const go = () => {
  const direction = Math.round(random(1, 4));
  switch (direction) {
    case 1:
      goUp();
      break;
    case 2:
      goRight();
      break;
    case 3:
      goDown();
      break;
    case 4:
      goLeft();
      break;
  }
};

const goRight = () => {
  x = x < COLS - 1 ? x + 1 : 0;
};

const goLeft = () => {
  x = x > 0 ? x - 1 : COLS - 1;
};

const goUp = () => {
  y = y > 0 ? y - 1 : ROWS - 1;
};

const goDown = () => {
  y = y < ROWS - 1 ? y + 1 : 0;
};
