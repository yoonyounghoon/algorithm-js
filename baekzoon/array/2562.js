// 2562번
// 최대값
// 출력 : '이들 중 최댓값은 x이고 이 값은 n번째 수이다.
function solution(arr) {
  let maxValue = arr[0];
  let index = 0;

  arr.map((value, i) => {
    if (value >= maxValue) {
      maxValue = value;
      index = i;
    }
  });
  return `이들 중 최댓값은 ${maxValue}이고 이 값은 ${index + 1}번째 수이다. `;
}
console.log(solution([3, 29, 38, 12, 57, 74, 40, 85, 61]));
console.log(solution([1, 2, 3, 4]));
