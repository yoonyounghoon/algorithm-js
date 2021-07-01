// 자릿수의 합이 최대인 자연수
// 같은 경우, 원래 숫자가 큰 숫자를 답으로 함.
function solution(n, arr) {
  // 숫자를 내림차순으로 정렬하고
  let sortedArr = arr.sort((a, b) => b - a);

  // 각 자릿수의 합을 구한 새로운 배열을 만든 후
  let sumArr = sortedArr.map((value) => {
    let sum = 0;
    String(value)
      .split('')
      .forEach((value) => {
        return (sum += Number(value));
      });
    return sum;
  });

  // sumArr 중에 max 값
  let max = Math.max(...sumArr);
  let index = sumArr.findIndex((value) => value === max);

  // max값의 인덱스를 원래 arr의 인덱스로 리턴한다.
  return arr[index];
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));
