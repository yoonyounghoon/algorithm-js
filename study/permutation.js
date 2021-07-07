// 순열 구하기
// nCr : 서로 다른 n개에서 r개를 택하는 경우, 순서를 상관하지 않음.
const getPermutation = (arr, selectNumber) => {
  const results = [];
  if (selectNumber === 1) return arr.map((value) => [value]);

  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const permutations = getPermutation(rest, selectNumber - 1);
    const attached = permutations.map((permutation) => [fixed, ...permutation]);
    results.push(...attached);
  });

  return results;
};

const result = getPermutation([1, 2, 3, 4], 3);
console.log(result);
