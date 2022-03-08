const { print } = require("../linked-list/link-print");

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

let a = new Node(1);
let b = new Node(2);
let c = new Node(4);
a.next = b;
b.next = c;

const reverse = (head) => {
  let current = head;
  let prev = null,
    next;

  while (current !== null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
};

print(reverse(a));
