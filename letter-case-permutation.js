const permutation = (s) => {
  const permuate = [];
  const temp = [];

  const rec = (s, index, temp, permuate) => {
    if (s.length === temp.length) {
      permuate.push(temp.join(""));
      return;
    } else {
      let charCode = s.charCodeAt(index);

      if (charCode >= 48 && charCode <= 57) {
        temp.push(s[index]);
        index += 1;
        rec(s, index, temp, permuate);
      } else {
        let lowerCase = s[index].toLowerCase();
        let upperCase = s[index].toUpperCase();
        index += 1;
        let ltemp = [...temp, lowerCase];
        let utemp = [...temp, upperCase];
        rec(s, index, ltemp, permuate);
        rec(s, index, utemp, permuate);
      }
    }
  };

  rec(s, 0, temp, permuate);
  return permuate;
};

console.log(permutation("a1b1"));
