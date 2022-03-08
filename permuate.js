
const permutation = (nums) => {
  const result = [];
  const temp = [];

  function permute(nums,temp,result){
    if(temp.length === nums.length){
      result.push([...temp])
      return
    }

    for(let i=0;i<nums.length;i++){
      if(temp.includes(nums[i])) continue;
      temp.push(nums[i]);
      permute(nums,temp,result);
      temp.pop()
    }
  }

  permute(nums,temp,result)
  return result
}

console.log(permutation([1,2,3]))