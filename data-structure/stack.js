class Stack {
  constructor() {
    this._arr = [];
  }
  push(item) {
    this._arr.push(item);
  }
  pop() {
    return this._arr.pop();
  }

  length() {
    return this._arr.length;
  }

  peek() {
    return this._arr[this._arr.length - 1];
  }

  isEmpty() {
    return this._arr.length === 0;
  }

  clear() {
    return (this._arr = []);
  }
}

// 백준 10773번 제로
function solution(arr) {
  let resultArr = [];
  arr.forEach((number) => {
    return number !== 0 ? resultArr.push(number) : resultArr.pop();
  });
  return resultArr.reduce((accumulator, cur) => accumulator + cur, 0);
}
let result = solution([3, 0, 4, 0]);
console.log(result);
result = solution([1, 3, 5, 4, 0, 0, 7, 0, 0, 6]);
console.log(result);
