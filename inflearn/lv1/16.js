// 중복된 문자 제거
function solution(s) {
  // let result = [];

  // for (let i = 0; i < s.length; i++) {
  //   // 없으면 넣어줘
  //   if (!result.includes(s[i])) {
  //     result.push(s[i]);
  //   }
  // }
  // return result.join('');

  let answer = '';

  // indexOf 사용해서 해보기
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === i) answer += s[i];
  }

  return answer;
}
console.log(solution('ksekkset'));
