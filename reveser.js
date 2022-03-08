
const reverse = (s) => {
  let l = s.length - 1;
  let mid = Math.floor(l/2);
  
  for (let i=0;i<=mid;i++){
    let temp = s[i]
    s[i] = s[l-i]
    s[l-i] = temp
  }
  console.log(s.split(""))
  return s;
}

console.log(reverse("dog t"))
