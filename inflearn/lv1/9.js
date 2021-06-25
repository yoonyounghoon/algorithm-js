function solution(s) {
  let str = '';

  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'A') str += '#';
    else str += s[i];
  }
  return str;
  //   return s.replace(/A/g, '#');
}

let str = 'BANANA';
console.log(solution(str));
