// 산술평균
function avg(numbers) {
  let sum = 0;
  numbers.forEach((number) => {
    sum += number;
  });
  return Number((sum / numbers.length).toFixed());
}

// 중앙값
function median(numbers) {
  return numbers.sort((a, b) => a - b)[Math.floor(numbers.length / 2)];
}

// 최빈값
function many(numbers) {
  const result = {};
  numbers.forEach((number) => {
    result[number] = (result[number] || 0) + 1;
  });
  let maxNumber = Math.max(...Object.values(result));
  let keyValuesArr = Object.entries(result);
  let arr = [];
  for (let i = 0; i < keyValuesArr.length; i++) {
    if (keyValuesArr[i][1] === maxNumber) arr.push(keyValuesArr[i]);
  }
  arr = arr.map((value) => Number(value[0]));
  arr.sort((a, b) => a - b);
  return arr[1];
}

// 범위
function maxAndMin(numbers) {
  const max = Math.max(...numbers);
  const min = Math.min(...numbers);
  return max - min;
}

function solution(numbers) {
  const avgResult = avg(numbers);
  const medianResult = median(numbers);
  const maxMinusMin = maxAndMin(numbers);
  const manyResult = many(numbers);

  return [avgResult, medianResult, manyResult, maxMinusMin];
}
console.log(solution([1, 3, 8, -2, 2]));
console.log(solution([-1, -2, -3, -1, -2]));
