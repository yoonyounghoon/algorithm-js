function solution(brown, yellow) {
  const totalSpace = brown + yellow;

  for (let h = 3; h <= totalSpace; h++) {
    let width = Math.floor(totalSpace / h);
    if ((width - 2) * (h - 2) === yellow) {
      return [width, h];
    }
  }
}
sol;
