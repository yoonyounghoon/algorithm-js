// 최대공약수
const GCD = (a, b) => {
  if (b === 0) return a;
  return GCD(b, a % b);
};
// 최소공배수
const LCM = (a, b) => {
  return (a * b) / GCD(a, b);
};

const GCDLCM = (a, b) => {
  let answer = [];
  answer.push(GCD(a, b));
  answer.push(LCM(a, b));

  return answer;
};

console.log(GCDLCM(3, 12));
console.log(GCDLCM(2, 5));
