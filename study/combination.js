// nCr : 서로 다른 n개에서 r개를 택하는 경우, 순서를 상관하지 않음.
const getCombinations = (arr, selectNumber) => {
  const results = [];
  // 1개를 고르는 경우 각 원소를  [원소] 식으로 배열에 담아 리턴해준다
  if (selectNumber === 1) return arr.map((value) => [value]);

  // 원소를 돌아가면서 한개를 고정해놓고 나머지에 대한 조합을 구한다.
  arr.map((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, selectNumber - 1);
    const attached = combinations.map((value) => [fixed, ...value]);
    results.push(...attached);
  });

  return results;
};

const result = getCombinations([1, 2, 3, 4], 3);
console.log(result);
