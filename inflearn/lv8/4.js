function solution(n) {
  let checked = Array.from({ length: n + 1 }, () => 0);
  let answer = [];
  function DFS(L) {
    if (L === n + 1) {
      let tmp = '';
      for (let i = 1; i <= n; i++) {
        if (checked[i] === 1) {
          tmp += i + ' ';
        }
      }
      if (tmp.length > 0) {
        console.log(tmp);
      }
    } else {
      checked[L] = 1;
      DFS(L + 1);
      checked[L] = 0;
      DFS(L + 1);
    }
  }
  DFS(1);

  return answer;
}

console.log(solution(3));
