function solution(s) {
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== ')') {
      stack.push(s[i]);
    } else {
      while (stack.pop() !== '(');
    }
  }

  let answer = stack.join('');

  return answer;
}

let str = '(A(BC)D)EF(G(H)(IJ)K)LM(N)';
console.log(solution(str));
