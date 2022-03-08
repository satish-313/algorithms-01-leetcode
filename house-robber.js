const houseRobber = (nums) => {
  if(nums.length === 1) return nums[0];
  if(nums.length === 2) return Math.max(nums[0],nums[1])
  let dp = []
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0],nums[1]);

  for(let i=2;i<nums.length;i++){
    let rob1 = nums[i] + dp[i-2];
    let rob2 = dp[i-1]
    dp[i] = Math.max(rob1,rob2)
  }

  return dp[nums.length-1]
}

console.log(houseRobber([2,70,9,3,10]))