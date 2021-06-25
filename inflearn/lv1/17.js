function solution(s) {
  // let result = new Set(s);
  // let arr = [...result];

  // arr.forEach((str) => {
  //   console.log(str);
  // });

  // indexOf로 해보기
  let answer;

  answer = str.filter((val, idx) => {
    return str.indexOf(val) === idx;
  });

  return answer;
}
let str = ['good', 'time', 'good', 'time', 'student'];
console.log(solution(str));
