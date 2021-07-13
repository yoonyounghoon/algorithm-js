function solution(need, plan) {
  let queue = need.split('');

  for (let x of plan) {
    if (need.includes(x)) {
      if (x !== queue.shift()) {
        return 'NO';
      }
    }
  }
  return 'YES';
}

let a = 'BCA';
let b = 'CBDAGE';
console.log(solution(a, b));
