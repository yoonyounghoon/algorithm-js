function solution(priorities, location) {
  let list = priorities.map((value, index) => ({
    my: location === index ? true : false,
    val: value,
  }));

  let count = 0;
  while (true) {
    let current = list.shift();
    if (list.some((value) => value.val > current.val)) {
      list.push(current);
    } else {
      count++;
      if (current.my) return count;
    }
  }
}

console.log(solution([2, 1, 3, 2], 2));
console.log(solution([1, 1, 9, 1, 1, 1], 0));
