function isPrime(num) {
  let count = 0;
  if (num < 2) return false;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }

  return true;
}

function solution(arr) {
  let result = [];

  let temp = arr.map((number) => {
    return Number(String(number).split('').reverse().join(''));
  });

  temp.forEach((num) => {
    if (isPrime(num)) result.push(num);
  });

  return result;
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));
