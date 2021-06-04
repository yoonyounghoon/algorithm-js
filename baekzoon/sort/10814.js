// 온라인 저지 회원을 나이 순, 나이가 같으면 가입한 순으로
function solution(users) {
  return users.sort((a, b) => {
    if (a[0] < b[0]) return -1;
    if (a[0] > b[0]) return 1;
    if (a[0] === b[0]) return a[1].localeCompare(b[1]);
  });
}
console.log(
  solution([
    [21, 'JunKyu'],
    [21, 'Dohyun'],
    [20, 'Sunyoung'],
  ]),
);
