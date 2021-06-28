// 1:가위,  2:바위, 3:보
function solution(a, b) {
  for (let i = 0; i < a.length; i++) {
    // 무승부일때
    if (a[i] === b[i]) console.log('D');
    // A가 이기는 경우만 정의
    else if (a[i] === 1 && b[i] === 3) console.log('A');
    else if (a[i] === 2 && b[i] === 1) console.log('A');
    else if (a[i] === 3 && b[i] === 2) console.log('A');
    else console.log('B');
  }
}

let a = [2, 3, 3, 1, 3];
let b = [1, 1, 2, 2, 3];
console.log(solution(a, b));
