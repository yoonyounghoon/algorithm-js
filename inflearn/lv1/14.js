function solution(s) {
  let min = s[0];
  for (let i = 1; i < s.length; i++) {
    if (s[i].length > min.length) min = s[i];
  }
  return min;
}
let str = ['teacher', 'time', 'student', 'beautiful', 'good'];
console.log(solution(str));
