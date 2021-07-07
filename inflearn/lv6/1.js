function solution(s) {
  let answer = 'YES';
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[0] === ')' || s[s.length - 1] === '(') return 'NO';
    if (s[i] === '(') stack.push(s[i]);
    else {
      if (stack.pop() === undefined) return 'NO';
      stack.pop();
    }
  }
  if (stack.length) answer = 'NO';

  return answer;
}

// let a = '(()(()))(()';
let a = '(()(()))(()';
console.log(solution(a));
