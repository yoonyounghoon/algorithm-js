function solution(location) {
  location.sort((a, b) => {
    if (a[0] < b[0]) {
      return -1;
    }
    if (a[0] > b[0]) {
      return 1;
    }
    if (a[0] === b[0]) {
      if (a[1] < b[1]) {
        return -1;
      }
      if (a[1] > b[1]) {
        return 1;
      }
      return 0;
    }
  });

  return location;
}
console.log(
  solution([
    [3, 4],
    [1, 1],
    [1, -1],
    [2, 2],
    [3, 3],
    [1, -2],
    [1, 6],
    [1, 10],
    [1, -10],
    [1, -21],
  ]),
);
