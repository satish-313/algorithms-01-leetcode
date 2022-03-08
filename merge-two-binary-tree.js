const { depthFirst } = require("../binary-tree/depth-first-search");
const {breathFirst} = require("../binary-tree/breath-first")

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

let a = new Node(1);
let b = new Node(3);
let c = new Node(2);
let d = new Node(5);

a.left = b;
// a.right = c;
// b.left = d;

let aa = new Node(2);
let bb = new Node(1);
let cc = new Node(3);
let dd = new Node(4);
let ee = new Node(7);

// aa.left = bb;
// aa.right = cc;
// bb.right = dd;
// cc.right = ee;

const merge = (root1, root2) => {
  if (root1 === null && root2 === null) return null;
  if (root1 === null) return root2;
  if (root2 === null) return root1;

  root1.val = root1.val + root2.val
    
  root1.left = merge(root1.left, root2.left);
  root1.right = merge(root1.right, root2.right);

  return root1;
};

// console.log(depthFirst(merge(a, aa)));
console.log(breathFirst(merge(a,aa)))