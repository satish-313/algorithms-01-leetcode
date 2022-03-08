let checkInclusion = function (s1, s2) {
  let len = s1.length;
  let arrs2 = s2.split("");
  let arr = arrs2.slice(0, len);
  let objs1 = {};

  function makeObj(a) {
    let obj = {};
    for (let ele of a) {
      obj[ele] === undefined ? (obj[ele] = 1) : obj[ele]++;
    }
    return obj;
  }

  for (let ele of s1) {
    objs1[ele] === undefined ? (objs1[ele] = 1) : objs1[ele]++;
  }

  function isAnagram(obj1, a) {
    let obj2 = makeObj(a)
    for (let ele in obj1) {
      if (ele in obj2 && obj2[ele] === obj1[ele]) {
        continue;
      } else {
        return false;
      }
    }
    return true;
  }

  for (let i = len-1; i < arrs2.length; i++) {
    console.log(arr)
    if (isAnagram(objs1, arr)) {
      return true;
    }
    arr.shift();
    arr.push(arrs2[i + 1]);
    console.log("after shift ",arr)
  }

  return false;
};

console.log(checkInclusion("ab","eidboaoo"))