// 괄호를 적절히 쳐서 이 식의 값을 최소로
function solution(expression) {
  let arr = expression.split('-');
  let splitedArr = arr.map((value) => value.split('+'));
  let resultArr = splitedArr.map((value) =>
    value.reduce((acc, cur) => (acc += Number(cur)), 0),
  );
  let result = resultArr[0];
  for (let i = 1; i < resultArr.length; i++) {
    result -= resultArr[i];
  }
  return result;
}
console.log(solution('55-50+40'));
