const updateMatrix = (mat) => {
  const set = new Set();
  const queue = [];
  const dir = [[1, 0],[-1, 0],[0, 1],[0, -1],]; // four direction
  let temp = [];
  let wave = 1;

  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[0].length; j++) {
      const key = i + "," + j;
      // for getting all zero of matrix
      if (mat[i][j] === 0) temp.push(key); 
      set.add(key);
    }
  }

  queue.push(temp);

  while (queue.length > 0) {
    const currents = queue.shift();
    temp = [];

    for (let current of currents) {
      let [i, j] = current.split(",");
      for (let [r, c] of dir) {
        let ir = parseInt(i) + r;
        let jc = parseInt(j) + c;
        let key = ir + "," + jc;

        if (
          ir >= 0 &&
          ir < mat.length &&
          jc >= 0 &&
          jc < mat[0].length &&
          mat[ir][jc] !== 0 &&
          set.has(key) // to get unique or not repeating
        ) {
          temp.push(key);
          mat[ir][jc] = wave;
          set.delete(key);
        }
      }
    }

    wave += 1;
    if (temp.length !== 0) queue.push(temp);
  }

  return mat;
};

// console.log(
//   updateMatrix([
//     [1, 1, 1],
//     [1, 1, 1],
//     [1, 1, 0],
//   ])
// );
console.log(
  updateMatrix([
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 0, 0, 0, 1, 1, 0],
    [1, 1, 1, 1, 1, 1, 0, 0, 1, 0],
    [1, 0, 0, 1, 1, 1, 0, 1, 0, 1],
    [0, 0, 1, 0, 0, 1, 1, 0, 0, 1],
    [0, 1, 0, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 1, 0, 1, 1, 1],
    [1, 1, 0, 0, 1, 0, 1, 0, 1, 1],
  ])
);
