const singleNumber = (nums) => {
  const obj = {};

  for (let ele of nums) {
    if (ele in obj) obj[ele]++;
    else obj[ele] = 1;
  }

  for (let ele in obj) {
    if (obj[ele] === 1) return ele;
  }
};


console.log(singleNumber([4,1,2,1,2]))