const connect = (root) => {
  const rec = (current) => {
    if (current === null || current.left === null) return;

    current.left.next = current.right;

    if (current.next !== null) current.right.next = current.next.left;

    rec(current.left);
    rec(current.right);
  };

  rec(root);

  return root;
};
