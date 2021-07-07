function solution(board, moves) {
  // 뽑은 인형이 담길 공간
  let stack = [];
  let count = 0;

  for (let i = 0; i < moves.length; i++) {
    // 뽑을 열 : moves[i]

    // 열중 0이 아닌 값을 찾음
    for (let j = 0; j < board.length; j++) {
      if (board[j][moves[i] - 1] !== 0) {
        stack.push(board[j][moves[i] - 1]);
        board[j][moves[i] - 1] = 0;
        break;
      }
    }

    // 같은것이 2개이상 있는지 확인 하는 메소드
    if (stack.length > 1) {
      if (stack[stack.length - 1] === stack[stack.length - 2]) {
        stack.pop();
        stack.pop();
        count += 2;
      }
    }
  }

  return count;
}

let a = [
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 2, 1, 0, 0],
  [0, 2, 1, 0, 0],
  [0, 2, 1, 0, 0],
];

let b = [1, 2, 3, 3, 2, 3, 1];
console.log(solution(a, b));
