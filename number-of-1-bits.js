const hammingWeight = function (n) {
  return (n >>> 0).toString(2).match(/1/g)?.length || 0;
};

const hammingWeight2 = n => 
  n.toString(2).match(/1/g)?.length ?? 0; 
