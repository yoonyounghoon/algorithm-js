/* 남은 시간을 가져옵니다. */
const getLeftDays = (progress, speed) => {
  return Math.ceil((100 - progress) / speed);
};

function solution(progresses, speeds) {
  let result = [];

  // 남은 시간을 계산
  const leftDays = progresses.map((progress, index) =>
    getLeftDays(progress, speeds[index])
  );
  console.log(leftDays);

  let temp = 1;
  let prev = leftDays[0];
  for (let i = 1; i < leftDays.length; i++) {
    if (prev >= leftDays[i]) {
      temp += 1;
    } else {
      result.push(temp);
      prev = leftDays[i];
      temp = 1;
    }
  }
  result.push(temp);
  return result;
}

console.log(solution([99, 99, 99], [1, 1, 1]));
