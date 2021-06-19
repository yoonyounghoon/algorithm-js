function solution(absolutes, signs) {
  return absolutes.reduce((sum, value, currentIndex) => {
    return signs[currentIndex] === true ? (sum += value) : (sum += -1 * value);
  }, 0);
}

console.log(solution([1, 2, 3], [false, false, true]));
