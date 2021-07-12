function solution(s) {
  let sum = 0;
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] >= 0 && s[i] < 10) {
      stack.push(Number(s[i]));
    } else {
      let a = stack.pop();
      let b = stack.pop();
      if (s[i] === '+') stack.push(b + a);
      else if (s[i] === '-') stack.push(b - a);
      else if (s[i] === '*') stack.push(b * a);
      else if (s[i] === '/') stack.push(b / a);
    }
  }
  return stack[0];
}

// let str = '352+*9-';
let str = '35-';
console.log(solution(str));
