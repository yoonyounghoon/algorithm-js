// 줄을 서 있는 사람의 수 N과 각 사람이 돈을 인출하는데 걸리는 시간 Pi가 주어졌을 때,
// 각 사람이 돈을 인출하는데 필요한 시간의 합의 최솟값을 구하는 프로그램을 작성하시오.

function atm(people) {
  let time = 0;
  let accumulate = 0;
  const sortedPeople = people.sort((a, b) => a - b);
  while (sortedPeople.length !== 0) {
    accumulate += sortedPeople[0];
    sortedPeople.shift();
    time += accumulate;
  }
  return time;
}
console.log(atm([3, 1, 4, 3, 2]));
