// 최저 순위 = 0이 아닌 수들이 포함된 개수
// 최고 순위 = 0이 아닌 수들이 포함된 개수 + 0인 개수

function changeNumber(number) {
  if (number === 6) {
    return 1;
  } else if (number === 5) {
    return 2;
  } else if (number === 4) {
    return 3;
  } else if (number === 3) {
    return 4;
  } else if (number === 2) {
    return 5;
  } else {
    return 6;
  }
}

function lotto(lottos, win_nums) {
  const result = [];
  let lowCount = 0; // 최저 등수 맞은 개수
  let highCount = 0; // 최고 등수 맞은 개수

  // 최저등수 맞은 개수 구하는 로직
  lottos.forEach((lotto) => {
    if (win_nums.indexOf(lotto) > -1) {
      lowCount++;
    }
  });

  // // 최고 등수 맞은 개수 구하는 로직
  highCount = lowCount + lottos.filter((number) => number === 0).length;

  //   // 맞은 개수 등수로 변환
  result.push(changeNumber(highCount));
  result.push(changeNumber(lowCount));

  return result;
}

console.log(lotto([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]));
console.log(lotto([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25]));
console.log(lotto([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35]));
