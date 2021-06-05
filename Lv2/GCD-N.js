function solution(arr) {
  let originNumber = Math.max(...arr);
  let GCD_Number = Math.max(...arr);

  while (true) {
    if (arr.every((number) => GCD_Number % number === 0)) {
      break;
    }
    GCD_Number += originNumber;
  }
  return GCD_Number;
}

console.log(solution([2, 6, 8, 14]));
console.log(solution([1, 2, 3]));
