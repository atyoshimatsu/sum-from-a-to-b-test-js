const sum = (fromN, toN) => {
  if (fromN === toN) {
    return fromN;
  }

  return toN + sum(fromN, toN - 1);
};

console.log(sum(3, 7));

module.exports = sum;
