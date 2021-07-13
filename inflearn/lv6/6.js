function solution(n, k) {
  const queue = [];

  // 초기값 설정
  for (let i = 1; i <= n; i++) {
    queue.push(i);
  }

  // 특정숫자 외친사람 제외
  while (queue.length !== 1) {
    for (let i = 1; i <= k; i++) {
      if (i === k) {
        queue.shift();
      } else {
        let current = queue.shift();
        queue.push(current);
      }
    }
  }
  return queue[0];
}

console.log(solution(8, 3));
