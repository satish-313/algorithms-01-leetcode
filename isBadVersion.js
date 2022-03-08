// binary search
const solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let l = 1;
    let r = n;
    let mid;

    while (l <= r) {
      mid = Math.floor((l + r) / 2);
      if (isBadVersion(mid) && isBadVersion(mid - 1) === false) return mid;
      else if (isBadVersion(mid) === true) r = mid - 1;
      else l = mid + 1;
    }
  };
};

