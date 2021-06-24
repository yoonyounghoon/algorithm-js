function solution(day, arr) {
  let newArr = arr.map((number) => number % 10);
  return newArr.filter((number) => number === day).length;
}

arr = [25, 23, 11, 47, 53, 17, 33];
console.log(solution(3, arr));
console.log(solution(7, [12, 20, 54, 30, 87, 91, 30]));
