// JadenCase란 모든 단어의 첫 문자가 대문자이고,
// 그 외의 알파벳은 소문자인 문자열입니다.
// 문자열 s가 주어졌을 때, s를 JadenCase로 바꾼
// 문자열을 리턴하는 함수, solution을 완성해주세요.

const JadenCase = (string) => {
  let stringArr = string.split(" ");
  let result = stringArr.map((value) => {
    return value.charAt(0).toUpperCase() + value.substring(1).toLowerCase();
  });
  return result.join(" ");
};

// function solution(s) {
//   s = s.toLowerCase();
//   var answer = s
//     .split(" ")
//     .map((s) => {
//       let arr = s.split("");
//       if (arr[0] != null) arr[0] = arr[0].toUpperCase();
//       return arr.join("");
//     })
//     .join(" ");
//   return answer;
// }

console.log(JadenCase("3people  unFollowed me"));
