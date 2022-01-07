const drawBox = (x, y) => {
  noStroke();
  fill(100, 200, 100);
  rect(x * GRID_W, y * GRID_H, GRID_W, GRID_H);

  // DEBUG:
  // textSize(16);
  // fill(202, 0, 0);
  // text(`x: ${x}, y: ${y}`, x * GRID_W, y * GRID_H);
};

const go = () => {
  let [nextX, nextY] = getNextPos(x, y);

  x = nextX;
  y = nextY;
};

const getRandomDirection = () => {
  return Math.round(random(1, 4));
};

const getNextPos = (x, y) => {
  const direction = getRandomDirection();
  switch (direction) {
    case 1:
      return [x, goUp(y)];
    case 2:
      return [goRight(x), y];
    case 3:
      return [x, goDown(y)];
    case 4:
      return [goLeft(x), y];
  }
};

const goRight = (x) => {
  return x < COLS - 1 ? x + 1 : 0;
};

const goLeft = (x) => {
  return x > 0 ? x - 1 : COLS - 1;
};

const goUp = (y) => {
  return y > 0 ? y - 1 : ROWS - 1;
};

const goDown = (y) => {
  return y < ROWS - 1 ? y + 1 : 0;
};
