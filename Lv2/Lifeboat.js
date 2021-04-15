function solution(people, limit) {
  let count = 0;
  let sorted = people.sort((a, b) => a - b).reverse();
  let i = 0;
  let j = sorted.length - 1;
  while (i < j) {
    let sum = sorted[i] + sorted[j];
    if (sum > limit) {
      i++;
    } else {
      i++;
      j--;
    }
    count++;
  }
  if (i === j) count++;
  return count;
}

console.log(solution([70, 50, 80, 50], 100));
