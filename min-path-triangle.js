
const minPath = (triangle) => {
  if (triangle.length === 1) return triangle[0][0];
  let min = triangle[0][0]

  for(let i=1;i<triangle.length;i++){
    for(let j=0;j<triangle[i].length;j++){
      
    }
  }

  return min
}

console.log(minPath([[2],[3,4],[6,5,7],[4,1,8,3]]))