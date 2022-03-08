const { print } = require("../linked-list/link-print");

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

let a = new Node(-1);
let b = new Node(0);
let c = new Node(1);
a.next = b;
b.next = c;

let a1 = new Node(2);
let b1 = new Node(3);
let c1 = new Node(4);
a1.next = b1;
b1.next = c1;

const mergeList = (head1, head2) => {
  if (head1 === null) return head2;
  if (head2 === null) return head1;
  let current1 = head1;
  let current2 = head2;
  let mhead, head;

  if (current1.val > current2.val) {
    head = new Node(current2.val);
    current2 = current2.next;
  } else {
    head = new Node(current1.val);
    current1 = current1.next;
  }

  mhead = head;

  while (current1 !== null && current2 !== null) {
    if (current1.val < current2.val) {
      head.next = current1;
      current1 = current1.next;
      head = head.next;
    } else {
      head.next = current2;
      current2 = current2.next;
      head = head.next;
    }
  }

  if (current1 !== null) head.next = current1;
  if (current2 !== null) head.next = current2;

  return mhead;
};

print(mergeList(a1, a));
