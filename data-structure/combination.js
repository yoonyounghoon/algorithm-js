const getCombinations = (arr, selectNumber) => {
  const results = [];
  if (selectNumber === 1) return arr.map((value) => [value]); // 하나씩 선택할때는 바로 모든 배열의 원소를 리턴한다.

  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)]; // 해당하는 fixed를 제외한 나머지
    const combinations = getCombinations(rest, selectNumber - 1); // 나머지에 대해서 조합을 구한다.
    const attached = combinations.map((combination) => [fixed, ...combination]); // 돌아온 조합에 떼놓은 fixed 붙이기
    results.push(...attached);
  });

  return results;
};

const result = getCombinations([1, 2, 3, 4], 3);
console.log(result);
