function solution(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let rank = 1;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] < arr[j]) rank++;
    }
    result.push(rank);
  }

  return result;
}

let arr = [92, 92, 92, 100, 76];
console.log(solution(arr));
console.log(solution([87, 89, 92, 100, 76]));
