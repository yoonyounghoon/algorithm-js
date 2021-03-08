// 문제 설명
// 정수 배열 numbers가 주어집니다. numbers에서 서로 다른 인덱스에 있는 두 개의 수를
// 뽑아 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 하도록
// solution 함수를 완성해주세요.

// 제한사항
// numbers의 길이는 2 이상 100 이하입니다.
// numbers의 모든 수는 0 이상 100 이하입니다.

// 1. 일단 이중 for문으로 값 계산하고 배열에 있으면 push, 없으면 continue, 마지막에 배열 sort
const solution = (numbers) => {
  let arr = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      let value = numbers[i] + numbers[j];
      if (arr.indexOf(value) === -1) {
        arr.push(value);
      }
    }
  }
  return arr.sort((a, b) => a - b);
};

console.log(solution([2, 1, 3, 4, 1]));
console.log(solution([5, 0, 2, 7]));
