function solution(str) {
  const regex = /[0-9]/g;
  let numberS = str.match(regex).join('');

  return Number(numberS);
}

let str = 'g0en2T0s8eSoft';
console.log(solution(str));
