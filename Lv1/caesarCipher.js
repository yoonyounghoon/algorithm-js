// 문제 설명
// 어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다.
// 예를 들어 "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 "DE"가 됩니다.
// "z"는 1만큼 밀면 "a"가 됩니다.
// 문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.

// 제한 조건
// 공백은 아무리 밀어도 공백입니다.
// s는 알파벳 소문자, 대문자, 공백으로만 이루어져 있습니다.
// s의 길이는 8000이하입니다.
// n은 1 이상, 25이하인 자연수입니다.

// z에서만 넘어가는걸 고려하실게 아니라 y 에 2를 더해도 넘어가고
// h에 25를 더해서 넘어가는 경우도 있으니
// 현재 알파벳에서 +n 을 했을때 z를 넘어가는 경우에 대한 처리를 해줘야 합니다
// 그리고 문제에 제대로 안써있는 데 대문자Z를 밀면 A로 갑니다

const caesarCipher = (string, number) => {
  let str = "";

  for (let i = 0; i < string.length; i++) {
    if (string[i] === " ") {
      str += " ";
    }
    // 1. 대문자 인 경우, 대문자 Z가 들어오는 경우
    else if (string[i].charCodeAt() <= 90) {
      let indexValue = string[i].charCodeAt() + number;
      if (indexValue > 90) {
        str += String.fromCharCode(indexValue - 26);
      } else {
        str += String.fromCharCode(indexValue);
      }
    }
    // 2. 소문자 인 경우, 소문자 Z가 들어오는 경우
    else if (string[i].charCodeAt() >= 97) {
      let indexValue = string[i].charCodeAt() + number;
      if (indexValue > 122) {
        str += String.fromCharCode(indexValue - 26);
      } else {
        str += String.fromCharCode(indexValue);
      }
    }
  }
  return str;
};

console.log(caesarCipher("AB", 1));
console.log(caesarCipher("z", 1));
console.log(caesarCipher("a B z", 4));
