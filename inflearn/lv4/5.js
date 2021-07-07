function getCombination(arr, selectNumber) {
  const result = [];
  if (selectNumber === 1) return arr.map((value) => [value]);

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombination(rest, selectNumber - 1);
    const attached = combinations.map((value) => [fixed, ...value]);
    result.push(...attached);
  });

  return result;
}

function solution(n, k, card) {
  const combination = getCombination(card, 3);
  let result = combination.map((value) => value.reduce((a, b) => a + b));
  result = [...new Set(result)];
  return result.sort((a, b) => b - a)[k - 1];
}

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));
