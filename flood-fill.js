const floodFill = (matrix, sr, sc, newColor) => {
  class Node {
    constructor(val, r, c) {
      this.val = val;
      this.r = r;
      this.c = c;
    }

    validMatrix(r, c, matrix) {
      if (r < 0 || c < 0 || r > matrix.length - 1 || c > matrix[0].length - 1)
        return false;
      return true;
    }

    topChild(node, matrix) {
      if (this.validMatrix(node.r - 1, node.c, matrix))
        return new Node(matrix[node.r - 1][node.c], node.r - 1, node.c);
      return null;
    }
    bottomChild(node, matrix) {
      if (this.validMatrix(node.r + 1, node.c, matrix))
        return new Node(matrix[node.r + 1][node.c], node.r + 1, node.c);
      return null;
    }
    rightChild(node, matrix) {
      if (this.validMatrix(node.r, node.c + 1, matrix))
        return new Node(matrix[node.r][node.c + 1], node.r, node.c + 1);
      return null;
    }
    leftChild(node, matrix) {
      if (this.validMatrix(node.r, node.c - 1, matrix))
        return new Node(matrix[node.r][node.c - 1], node.r, node.c - 1);
      return null;
    }
    update(node, matrix, newColor) {
      matrix[node.r][node.c] = newColor;
    }
  }

  let node = new Node(matrix[sr][sc], sr, sc);
  const set = new Set([`${node.r},${node.c}`]);
  const stack = [node];
  const rowLength = matrix.length - 1;
  const colLength = matrix[0].length - 1;
  const value = node.val;

  function validPosition({ r, c, val }) {
    const key = `${r},${c}`;
    if (r < 0 || c < 0 || r > rowLength || c > colLength) return false;
    if (val !== value) return false;
    if (set.has(key)) return false;
    set.add(key);
    return true;
  }

  while (stack.length > 0) {
    let current = stack.pop();

    let bc = current.bottomChild(current, matrix);
    let tc = current.topChild(current, matrix);
    let rc = current.rightChild(current, matrix);
    let lc = current.leftChild(current, matrix);

    current.update(current, matrix, newColor);

    if (tc && validPosition(tc)) stack.push(tc);
    if (rc && validPosition(rc)) stack.push(rc);
    if (bc && validPosition(bc)) stack.push(bc);
    if (lc && validPosition(lc)) stack.push(lc);
  }

  return matrix;
};

console.log(
  floodFill(
    [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
    ],
    1,
    1,
    2
  )
);

console.log(
  floodFill(
    [
      [0, 0, 0],
      [0, 1, 1],
    ],
    1,
    1,
    1
  )
);
