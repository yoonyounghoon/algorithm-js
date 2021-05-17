function solution(numbers) {
  let sum = 1;
  let countArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  for (let i = 0; i < numbers.length; i++) {
    sum *= numbers[i];
  }
  let sumElement = String(sum).split('');
  sumElement.forEach((value) => {
    countArr[value] += 1;
  });
  for (let i = 0; i < countArr.length; i++) {
    console.log(countArr[i]);
  }
}
console.log(solution([150, 266, 427]));

function solution(numbers) {
  let sum = 1;
  numbers.forEach((value) => (sum *= value));

  sum = String(sum);

  for (let i = 0; i <= 9; i++) {
    let count = 0;
    for (let j = 0; j < sum.length; j++) {
      if (sum[j] === String(i)) {
        count++;
      }
    }
    console.log(count);
  }
}
console.log(solution([150, 266, 427]));
