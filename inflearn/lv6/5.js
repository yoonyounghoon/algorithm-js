function solution(s) {
  const stack = [];
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(s[i]);
    } else {
      stack.pop();
      if (s[i - 1] === '(') {
        count += stack.length;
      } else {
        count += 1;
      }
    }
  }
  return count;
}

let a = '()(((()())(())()))(())';
console.log(solution(a));
