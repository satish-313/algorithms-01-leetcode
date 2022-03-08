const nearthZero = (mat) => {
  class Node {
    constructor(i, j) {
      this.i = i;
      this.j = j;
    }

    adjSide = [
      [1, 0],
      [-1, 0],
      [0, -1],
      [0, 1],
    ];

    neighbours({ i, j }, mat, set) {
      let neighbour = [];
      for (let k = 0; k < this.adjSide.length; k++) {
        let [r, c] = this.adjSide[k];
        let ir, jc;
        ir = i - r;
        jc = j - c;
        let key = `${ir},${jc}`;

        if (
          ir >= 0 &&
          jc >= 0 &&
          ir < mat.length &&
          jc < mat[0].length &&
          !set.has(key)
        ) {
          neighbour.push([ir, jc]);
        }
      }
      return neighbour;
    }
  }

  const solution = {};

  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[0].length; j++) {
      if (mat[i][j] === 1) {
        let findZero = true
        const paths = [[[i, j]]];
        const set = new Set();

        while (findZero) {
          let nodes = paths[paths.length - 1];
          let child = [];
          let childSet = new Set();
          for (let n of nodes) {
            let allNode = []
            let [r, c] = n;
            let node = new Node(r, c);
            let key = `${r},${c}`;
            set.add(key);

            let sides = node.neighbours(node, mat, set);

            for (let side of sides) {
              let [r, c] = side;
              if (mat[r][c] === 0) {
                findZero = false;
              }
            }
            
            child = [...child,...sides]
          }
          if (findZero) {
            paths.push(child);
          }
        }

        mat[i][j] = paths.length;
        solution[`${i},${j}`] = paths.length;
      }
    }
  }

  return mat;
};

console.log(
  nearthZero([
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 0],
  ])
);
// console.log(
//   nearthZero([
//     [1, 1, 0, 1, 1, 1, 1, 1, 1, 1],
//     [1, 1, 0, 1, 1, 1, 1, 1, 1, 1],
//     [1, 1, 1, 1, 0, 0, 0, 1, 1, 0],
//     [1, 1, 1, 1, 1, 1, 0, 0, 1, 0],
//     [1, 0, 0, 1, 1, 1, 0, 1, 0, 1],
//     [0, 0, 1, 0, 0, 1, 1, 0, 0, 1],
//     [0, 1, 0, 1, 1, 1, 1, 1, 1, 1],
//     [1, 0, 0, 1, 1, 0, 0, 0, 0, 0],
//     [0, 0, 1, 1, 1, 1, 0, 1, 1, 1],
//     [1, 1, 0, 0, 1, 0, 1, 0, 1, 1],
//   ])
// );
