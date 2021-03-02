// LEVEL2 정렬
// 문제 : 가장 큰 수
// numbers는 배열 형태
const solution = (numbers) => {
  let largestNumber = numbers
    .sort((a, b) => b.toString() + a.toString() - (a.toString() + b.toString()))
    .join("");
  return largestNumber[0] === "0" ? "0" : largestNumber;
};

// 앞자리수가 제일 큰 순서대로 정렬

console.log(solution([6, 10, 2]));
console.log(solution([3, 30, 34, 5, 9]));
console.log(solution([12, 121]));
