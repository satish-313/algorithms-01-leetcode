const combine = (n, k) => {
  const solution = [];
  const temp = [];

  const sol = (n, k, index, solution, temp) => {
    if (temp.length === k) {
      solution.push([...temp]);
      return;
    }

    for (let i = index; i <= n; i++) {
      temp.push(i);
      sol(n, k, i + 1, solution, temp);
      temp.pop();
    }
  };

  sol(n, k, 1, solution, temp);

  return solution;
};

console.log(combine(4, 2));
