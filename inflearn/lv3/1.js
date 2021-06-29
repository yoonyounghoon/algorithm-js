// 회문 문자열이면 YES 아니면 NO

// 0,1,2,3,4,5
// 0,1,2,3,4
// 짝수일때, 홀수일때 나눠서 하기

function solution(s) {
  let answer = 'YES';
  // 소문자로 통일
  s = s.toLowerCase();
  let reverseString = s.toLowerCase().split('').reverse().join('');

  for (let i = 0; i < s.length; i++) {
    if (s !== reverseString) {
      answer = 'NO';
      return answer;
    }
  }

  //   // 단어 reverse 시키고 비교
  //   for(let i=0; s.length; i++){

  //   }

  // // 홀짝으로 푸는 방법
  //   // 짝수일때
  //   if (string.length % 2 === 0) {
  //     for (let i = 0; i < string.length / 2; i++) {
  //       if (string[i] !== string[string.length - 1 - i]) {
  //         answer = 'NO';
  //       }
  //     }
  //   }
  //   // 홀수일때
  //   else {
  //     for (let i = 0; i < Math.floor(string.length / 2); i++) {
  //       if (string[i] !== string[string.length - 1 - i]) {
  //         answer = 'NO';
  //       }
  //     }
  //   }

  return answer;
}

let str = 'goooG';
console.log(solution(str));
console.log(solution('strs'));
