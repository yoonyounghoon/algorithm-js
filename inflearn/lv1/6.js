function solution(arr) {
  // 홀수만 담기는 배열
  let oddNumbers = arr.filter((number) => number % 2 !== 0);

  // 홀수의 합
  let sumOfOdd = oddNumbers.reduce(
    (accumulator, currentNumber) => (accumulator += currentNumber),
  );

  // 최소 값
  let min = Math.min(...oddNumbers);
  return [sumOfOdd, min];
}

arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));
