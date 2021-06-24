function solution(a, b, c) {
  let arr = [a, b, c];
  let max = Math.max(...arr);
  let sum = arr
    .filter((number) => number !== max)
    .reduce((accumulator, currentValue) => (accumulator += currentValue));

  return max > sum ? 'NO' : 'YES';
}

console.log(solution(6, 7, 11));
console.log(solution(13, 33, 17));
