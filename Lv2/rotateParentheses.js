const pair = { '}': '{', ']': '[', ')': '(' };

function isRight(str) {
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    const c = str[i];
    if (pair[c] === undefined) stack.push(c);
    else {
      if (stack[stack.length - 1] !== pair[c]) return false;
      stack.pop();
    }
  }
  if (stack.length) return false;
  return true;
}

function solution(s) {
  let stringArr = s.split('');
  let answer = 0;

  for (let i = 0; i < s.length; i++) {
    // 올바른 괄호인지 확인
    if (isRight(stringArr)) {
      answer += 1;
    }
    // 괄호 왼쪽으로 이동
    let current = stringArr.shift();
    stringArr.push(current);
  }

  return answer;
}
