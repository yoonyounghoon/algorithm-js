function solution(A, B) {
  let sum = 0;
  let arrA = A.sort((a, b) => a - b);
  let arrB = B.sort((a, b) => a - b).reverse();

  for (let i = 0; i < arrA.length; i++) {
    let result = arrA[i] * arrB[i];
    sum += result;
  }
  return sum;
}
console.log(solution([1, 4, 2], [5, 4, 4]));
console.log(solution([1, 2], [3, 4]));
