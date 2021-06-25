function solution(s, t) {
  let count = 0;
  //   let str = s.split('');
  //   while (str.indexOf(t) !== -1) {
  //     str.splice(str.indexOf(t), 1);
  //     count++;
  //   }
  for (let i = 0; i < s.length; i++) {
    if (s[i] === t) count++;
  }

  return count;
}

let str = 'COMPUTERPROGRAMMING';
console.log(solution(str, 'R'));
