function solution(record) {
  const history = record.map((record) => record.split(' '));
  const result = [];

  // 아이디랑 닉네임 매치
  let idAndNickName = {};
  for (let i = 0; i < history.length; i++) {
    if (history[i].length === 3) {
      idAndNickName[history[i][1]] = history[i][2];
    }
  }

  // 출력
  for (let i = 0; i < history.length; i++) {
    if (history[i][0] === 'Enter')
      result.push(`${idAndNickName[history[i][1]]}님이 들어왔습니다.`);
    else if (history[i][0] === 'Leave')
      result.push(`${idAndNickName[history[i][1]]}님이 나갔습니다.`);
  }

  return result;
}

console.log(
  solution([
    'Enter uid1234 Muzi',
    'Enter uid4567 Prodo',
    'Leave uid1234',
    'Enter uid1234 Prodo',
    'Change uid4567 Ryan',
  ]),
);
