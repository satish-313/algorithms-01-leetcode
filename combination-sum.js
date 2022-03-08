// const combinationSum = (nums, target) => {
//   const result = [];
//   const temp = [];
//   const set = new Set();

//   function solution(nums, target, temp, set, result) {
//     if (
//       temp.length >= 1 &&
//       temp.reduce((total, num) => total + num) > target
//     )
//       return;
//     if (
//       temp.length >= 1 &&
//       temp.reduce((total, num) => total + num) === target
//     ) {
//       let s = [...temp].sort();
//       let str = s.join(",");
//       if (!set.has(str)) result.push([...temp]);
//       set.add(str);
//       return;
//     }

//     for (let i = 0; i < nums.length; i++) {
//       temp.push(nums[i]);
//       solution(nums, target, temp, set, result);
//       temp.pop();
//     }
//   }

//   solution(nums, target, temp, set, result);
//   console.log(set);
//   return result;
// };

const combinationSum = (nums, target) => {
  const set = new Set();
  const result = []

  const recursion = (nums, target) => {
    if (target === 0) return [[]];
    if (target < 0) return [];

    let allResult = [];

    for (let ele of nums) {
      const newTarget = target - ele;
      const res = combinationSum(nums, newTarget);
      const newCollection = res.map((a) => [ele, ...a]);
      allResult.push(...newCollection);
    }

    return allResult
  };

  let allResult = recursion(nums, target);
  
  for(let i=0;i<allResult.length;i++){
    let sort = allResult[i].sort();
    let str = sort.join(",");
    if(!set.has(str)) result.push([...allResult[i]]);
    set.add(str)
  }

  return result;
};

console.log(combinationSum([3, 9], 4));
