/* 2020 KAKAO BLIND RECRUITMENT - 괄호 변환 */

/* "균형잡힌 괄호 문자열" p가 매개변수로 주어질 때, 
주어진 알고리즘을 수행해 "올바른 괄호 문자열"로 변환한 결과를 
return 하도록 solution 함수를 완성해 주세요. */

function solution(p) {
  // 1
  if (p === '') return '';

  let leftCount = 0;
  let rightCount = 0;
  let index = 0;
  let isRight = true;

  // 2
  do {
    if (p[index] === '(') leftCount++;
    else rightCount++;

    if (rightCount > leftCount) isRight = false;

    index++;
  } while (leftCount !== rightCount);

  let u = p.slice(0, index);
  let v = p.slice(index);

  // 3
  if (isRight) {
    return u + solution(v);
  } else {
    let result = `(${solution(v)})`;
    u = u
      .slice(1, u.length - 1)
      .replace(/[\(\)]/g, (value) => (value === '(' ? ')' : '('));
    return result + u;
  }
}

// console.log(solution(')('));
// console.log(solution('(()())()'));
console.log(solution('()))((()'));
