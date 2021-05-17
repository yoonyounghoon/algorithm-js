// 첫째 줄에, 42로 나누었을 때, 서로 다른 나머지가 몇 개 있는지 출력한다.
function solution(numbers) {
  const remainder = numbers.map((value) => value % 42);
  const result = new Set([...remainder]);

  return result.size;
}
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(solution([42, 84, 252, 420, 840, 126, 42, 84, 420, 126]));
console.log(solution([39, 40, 41, 42, 43, 44, 82, 83, 84, 85]));
