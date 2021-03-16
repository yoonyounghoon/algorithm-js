// 1번 찍는 방식 : 1,2,3,4,5 반복
// 2번 : 2,1,2,3,2,4,2,5
// 3번 : 3,3,1,1,2,2,4,4,5,5,

const mockExam = (answers) => {
  let answer = [];

  const student1 = [1, 2, 3, 4, 5];
  const student2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const student3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let count1 = 0;
  let count2 = 0;
  let count3 = 0;

  for (let i = 0; i < answers.length; i++) {
    if (student1[i % student1.length] === answers[i]) count1++;
    if (student2[i % student2.length] === answers[i]) count2++;
    if (student3[i % student3.length] === answers[i]) count3++;
  }

  let max = Math.max(count1, count2, count3);

  if (max === count1) answer.push(1);
  if (max === count2) answer.push(2);
  if (max === count3) answer.push(3);

  return answer;
};

console.log(mockExam([1, 2, 3, 4, 5, 1, 2]));
