const biggestIsland = (grid) => {
  class Node {
    constructor(r, c, grid) {
      if (
        r < 0 ||
        c < 0 ||
        r > grid.length - 1 ||
        c > grid[0].length - 1 ||
        grid[r][c] !== 1
      )
        return (this.is = false);
      this.r = r;
      this.c = c;
      this.is = true;
    }

    topChild({ r, c }, grid) {
      return new Node(r - 1, c, grid);
    }
    bottomChild({ r, c }, grid) {
      return new Node(r + 1, c, grid);
    }
    rightChilid({ r, c }, grid) {
      return new Node(r, c + 1, grid);
    }
    leftChild({ r, c }, grid) {
      return new Node(r, c - 1, grid);
    }
  }

  function checkKey({ r, c, is }, set) {
    const key = `${r},${c}`;
    if (is === false) return false;
    if (set.has(key)) return false;
    set.add(key);
    return true;
  }

  let area = 0;
  const stack = [];
  const set = new Set();

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      let key = `${i},${j}`;
      if (set.has(key)) continue;
      let tempArea = 0;

      if (grid[i][j] === 1) {
        const node = new Node(i, j, grid);
        stack.push(node);
        set.add(`${i},${j}`);

        while (stack.length > 0) {
          const current = stack.pop();
          tempArea += 1;

          let tc = current.topChild(current, grid);
          let bc = current.bottomChild(current, grid);
          let rc = current.rightChilid(current, grid);
          let lc = current.leftChild(current, grid);

          if (checkKey(tc, set)) stack.push(tc);
          if (checkKey(bc, set)) stack.push(bc);
          if (checkKey(rc, set)) stack.push(rc);
          if (checkKey(lc, set)) stack.push(lc);
        }
      }

      if (area < tempArea) area = tempArea;

      set.add(key);
    }
  }
  return area;
};

console.log(
  biggestIsland([
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
  ])
);

console.log(
  biggestIsland([
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  ])
);

console.log(
  biggestIsland([
    [1, 1, 1],
    [0, 1, 0],
  ])
);

console.log(biggestIsland([[]]));
