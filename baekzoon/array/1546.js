function solution(points) {
  let sum = 0;
  const maxPoint = Math.max(...points);
  let newPoints = points.map((point) => {
    return (point / maxPoint) * 100;
  });
  newPoints.forEach((point) => (sum += point));
  return (sum / newPoints.length).toFixed(2);
}
console.log(solution([40, 80, 60]));
console.log(solution([10, 20, 30]));
console.log(solution([1, 100, 100, 100]));
console.log(solution([1, 2, 4, 8, 16]));
console.log(solution([3, 10]));
