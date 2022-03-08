
const reverseInword = (s) => {
  s = s.split("");
  let l=0;
  let r;
  for(let i=0; i<s.length; i++){
    if(s[i+1] === " " || i+1 === s.length){
      r = i;
      let mid = Math.floor((l+r)/2);
      let k = 0;

      for(let j=l;j<=mid;j++,k++){
        let temp = s[j];
        s[j] = s[r-k]
        s[r-k] = temp;
      }

      l = i+2;
    }
  } 

  return s.join("");
}

console.log(reverseInword("God dinG Art"))