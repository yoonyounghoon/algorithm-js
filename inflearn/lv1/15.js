function solution(s) {
  let length = s.length;
  // 짝수
  if (length % 2 === 0) {
    return s.slice(length / 2 - 1, length / 2 + 1);
  }
  // 홀수
  else {
    return s.slice(Math.floor(length / 2), Math.floor(length / 2) + 1);
  }
}
console.log(solution('study'));
console.log(solution('good'));
