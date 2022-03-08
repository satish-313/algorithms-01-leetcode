const minTotal = (triangle) => {
  let row = triangle.length;
  
  const dp = Array(row+1).fill().map(() => Array(row+1).fill(Infinity))

  dp[1][1] = triangle[0][0]
  
  for(let i=2;i<row+1;i++){
    for(let j=1;j<=i;j++){
      dp[i][j] = Math.min(dp[i-1][j],dp[i-1][j-1]) + triangle[i-1][j-1]
    }
  }

  return Math.min(...dp[row]);
}

console.log(minTotal([[2],[3,4],[6,5,7],[4,1,8,3]]))