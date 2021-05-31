function permutation(arr, selectNum) {
  let result = [];
  if (selectNum === 1) return arr.map((value) => [value]);

  arr.forEach((v, idx, arr) => {
    const fixer = v;
    const restArr = arr.filter((_, index) => index !== idx);
    const permutationArr = permutation(restArr, selectNum - 1);
    const combineFixer = permutationArr.map((v) => [fixer, ...v]);
    result.push(...combineFixer);
  });

  return result;
}

console.log(permutation([1, 2, 3, 4], 3));
