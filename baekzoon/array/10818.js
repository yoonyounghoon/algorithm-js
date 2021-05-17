// 10818번 최소, 최대
function solution(arr) {
  let maxValue = arr[0];
  let minValue = arr[0];
  arr.map((value) => {
    if (value >= maxValue) maxValue = value;
    else if (value <= minValue) minValue = value;
  });
  return [maxValue, minValue];
}
console.log(solution([20, 10, 35, 30, 7]));
