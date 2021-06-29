// 각 행의 합,
// 각 열의 합,
// 두 대각선의 합
function solution(arr) {
  let row = [];
  let col = [];
  let cross = [];

  let colSum = 0;
  let crossLeft = 0;
  let crossRight = 0;

  // 각 행의 합
  for (let i = 0; i < arr.length; i++) {
    let sum = arr[i].reduce((acc, cur) => acc + cur);
    row.push(sum);
  }

  // 각 열의 합
  for (let i = 0; i < arr.length; i++) {
    colSum = 0;
    for (let j = 0; j < arr.length; j++) {
      colSum += arr[j][i];
    }
    col.push(colSum);
  }

  // 두 대각선의 합
  for (let i = 0; i < arr.length; i++) {
    crossLeft += arr[i][i];
  }
  cross.push(crossLeft);

  for (let j = arr.length - 1; j !== 0; j--) {
    crossRight += arr[j][j];
  }
  cross.push(crossRight);

  console.log(row);
  console.log(col);
  console.log(cross);
  return Math.max(...row, ...col, ...cross);
}

let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
console.log(solution(arr));
