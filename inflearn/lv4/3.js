function solution(test) {
  let result = [];

  for (let i = 1; i <= test[0].length; i++) {
    for (let j = 1; j <= test[0].length; j++) {
      if (i === j) continue;

      let flag = true;

      for (let k = 0; k < test.length; k++) {
        if (test[k].indexOf(i) > test[k].indexOf(j)) flag = false;
      }

      if (flag) {
        result.push([i, j]);
      }
    }
  }

  return result.length;
}

let arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];
// let arr = [
//   [19, 15, 4, 17, 12, 18, 6, 3, 11, 14, 1, 8, 13, 9, 2, 20, 5, 16, 10, 7],
//   [5, 20, 18, 17, 14, 11, 19, 3, 10, 16, 6, 8, 13, 9, 2, 12, 4, 7, 1, 15],
// ];
console.log(solution(arr));
