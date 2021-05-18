function solution(numbers) {
  const numbersSet = new Set([...numbers]);
  const arr = [...numbersSet].sort((a, b) => a - b);
  console.log(arr);
}
console.log(solution([5, 5, 3, 4, 3, 2, 1]));
