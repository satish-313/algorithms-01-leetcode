const oragesRotting = (grid) => {
  const set = new Set();
  const queue = [],
    temp = [];
  const dir = [[1, 0],[-1, 0],[0, 1],[0, -1]];
  let time = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      let key = i + "," + j;
      if (grid[i][j] === 2) temp.push(key);
      else if (grid[i][j] === 1) set.add(key);
    }
  }

  queue.push(temp); // all rotten orages
  if (set.size === 0) return 0;

  while (queue.length > 0) {
    const currents = queue.pop();
    const nextQueue = [];
    time += 1;
    for (let cur of currents) {
      let [i, j] = cur.split(",");
      for (let [r, c] of dir) {
        let ir = parseInt(i) + r;
        let jc = parseInt(j) + c;
        let key = ir + "," + jc;

        if (
          ir >= 0 &&
          ir < grid.length &&
          jc >= 0 &&
          jc < grid[0].length &&
          grid[ir][jc] === 1
        ) {
          // adding to nextqueue if key exist in set
          if (set.has(key)) nextQueue.push(key);
          // removing key from set 
          set.delete(key);
        }
      }
    }

    // pushing next minute rotten orages
    if (nextQueue.length !== 0) queue.push(nextQueue);
  }

  // if any good orages left
  if (set.size === 0) return time - 1;

  return -1;
};

// console.log(
//   oragesRotting([
//     [2, 1, 1],
//     [1, 1, 0],
//     [0, 1, 1],
//   ])
// );
console.log(
  oragesRotting([
    [2, 1, 1],
    [1, 1, 1],
    [0, 1, 2],
  ])
);
