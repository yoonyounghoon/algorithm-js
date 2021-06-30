// 문자열 s의 각 문자가 문자 t와 떨어진 최소 거리를 순서대로
// 출력한다.
function solution(s, t) {
  let answer = [];
  let p = 1000;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === t) {
      p = 0;
      answer.push(0);
    } else {
      p++;
      answer.push(p);
    }
  }
  p = 1000;

  for (let j = s.length - 1; j >= 0; j--) {
    if (s[j] === t) {
      p = 0;
      answer[j] = 0;
    } else {
      p++;
      answer[j] = Math.min(answer[j], p);
    }
  }

  return answer;
}

let str = 'teachermode';
console.log(solution(str, 'e'));
