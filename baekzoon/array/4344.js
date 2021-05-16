function solution(n, points) {
  let sum = 0;
  points.forEach((value) => (sum += value));
  let avg = sum / points.length;
  let avg_high = points.filter((value) => avg < value);
  return ((avg_high.length / points.length) * 100).toFixed(3);
}
console.log(solution(5, [50, 50, 70, 80, 100]));
console.log(solution(7, [100, 95, 90, 80, 70, 60, 50]));
console.log(solution(3, [70, 90, 80]));
console.log(solution(7, [70, 90, 81]));
console.log(solution(9, [100, 99, 98, 97, 96, 95, 94, 93, 91]));
