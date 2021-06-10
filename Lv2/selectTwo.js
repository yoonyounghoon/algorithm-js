// 월간 코드 챌린지 시즌 1 > 두개 뽑아서 더하기
function solution(numbers) {
  let result = [];

  numbers.forEach((number, index, origin) => {
    const fixed = number;
    const rest = origin.slice(index + 1);

    for (let i = 0; i < rest.length; i++) {
      result.push(fixed + rest[i]);
    }
  });

  const answer = new Set(result.sort((a, b) => a - b));

  return [...answer];
}

console.log(solution([2, 1, 3, 4, 1]));
// console.log(solution([5, 0, 2, 7]));
