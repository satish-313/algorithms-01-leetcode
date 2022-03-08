const reverseBits = function (n) {
  let str = (n >>> 0).toString(2).padStart(32, "0");
  let strReverse = str.split("").reverse().join("");
  let output = parseInt(strReverse, 2);
  return output;
};
