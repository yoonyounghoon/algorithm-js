// 알파벳만 가지고 회문을 검사, 대소문자 구문 안함

function solution(s) {
  let answer = 'YES';
  const regex = /[a-z]/g;
  s = s.toLowerCase().match(regex).join('');
  let reverse = [...s].reverse().join('');

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== reverse[i]) {
      answer = 'NO';
      return answer;
    }
  }

  return answer;
}

let str = 'found7, time: study; Yduts; emit, 7Dnuof';
console.log(solution(str));
