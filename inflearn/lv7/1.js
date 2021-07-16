function solution(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let idx = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[idx]) {
        idx = j;
      }
    }
    [arr[i], arr[idx]] = [arr[idx], arr[i]];
  }

  return arr;
}

let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));
