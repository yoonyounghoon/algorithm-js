function solution(a, b) {
  let resultArr = [];

  resultArr = a.map((_, index, a) => {
    return a[index] * b[index];
  });

  return resultArr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
}

console.log(solution([1, 2, 3, 4], [-3, -1, 0, 2]));
