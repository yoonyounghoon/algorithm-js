function solution(s) {
  return s.match(/[A-Z]/g).length;
}

let str = 'KoreaTimeGood';
console.log(solution(str));
