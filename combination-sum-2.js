// var combinationSum2 = function (candidates, target) {
//   const combination = [];
//   const set = new Set();

//   function recursion(candidates, target, index) {
//     if (target === 0) return [[]];
//     if (target < 0) return [];

//     let allCombine = [];

//     for (let i = index; i < candidates.length; i++) {
//       const newTarget = target - candidates[i];
//       const res = recursion(candidates, newTarget, (index += 1));
//       const newCollection = res.map((a) => [candidates[i], ...a]);
//       allCombine.push(...newCollection);
//     }

//     return allCombine;
//   }

//   let allCombination = recursion(candidates, target, 0);

//   for (let i = 0; i < allCombination.length; i++) {
//     let sort = allCombination[i].sort();
//     let str = sort.join(",");
//     if (!set.has(str)) combination.push([...allCombination[i]]);
//     set.add(str);
//   }

//   return combination;
// };

const combinationSum2 = (nums, target) => {
  return nums.reduce((sum, num) => sum + num);
  const result = [];
  const temp = [];
  const set = new Set();

  function solution(nums, target, index, temp, set, result) {
    if (temp.length >= 1 && temp.reduce((total, num) => total + num) > target)
      return;
    if (
      temp.length >= 1 &&
      temp.reduce((total, num) => total + num) === target
    ) {
      result.push([...temp]);
      return;
    }

    for (let i = index; i < nums.length; i++) {
      temp.push(nums[i]);
      solution(nums, target, (index += 1), temp, set, result);
      temp.pop();
    }
  }

  solution(nums, target, 0, temp, set, result);

  return result;
};

// console.log(combinationSum2([2, 5, 2, 1, 2], 5));
console.log(
  combinationSum2(
    [
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    ],
    30
  )
);
