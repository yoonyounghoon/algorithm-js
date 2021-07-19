function solution(n) {
  let answer = '';

  function DFS(n) {
    if (n === 0) {
      return;
    } else {
      DFS(parseInt(n / 2, 10));
      answer += String(n % 2);
    }
  }
  DFS(n);

  return answer;
}

console.log(solution(11));
