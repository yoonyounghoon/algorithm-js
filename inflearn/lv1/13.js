function solution(s) {
  let str = '';

  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i].toUpperCase()) str += s[i].toLowerCase();
    else str += s[i].toUpperCase();
  }

  return str;
}

console.log(solution('StuDY'));
