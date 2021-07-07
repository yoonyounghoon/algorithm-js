// 카펫의 가로, 세로 크기 ?
function solution(brown, yellow) {
  const totalSpace = brown + yellow;

  for (let i = 3; i <= totalSpace; i++) {
    // 전체 가로 세로
    let height = i;
    let width = totalSpace / height;

    // yello의 수 체크
    if (width >= height && (width - 2) * (height - 2) === yellow)
      return [width, height];
  }
}

console.log(solution(10, 2));
