/* 2020 KAKAO BLIND RECRUITMENT - 문자열 압축 */

function solution(s) {
  // 문자열의 길이가 담겨진 배열
  const result = [];

  // 문자열의 길이가 1일 경우
  if (s.length === 1) return 1;

  // 문자열 압축 로직

  // i는 s 문자열 나누는 단위
  for (let i = 1; i <= Math.floor(s.length / 2); i++) {
    let count = 1;
    let str = '';

    // 인덱스 비교
    for (let j = 0; j < s.length; j += i) {
      let currentValue = s.slice(j, j + i);
      let nextValue = s.slice(j + i, j + i + i);

      if (currentValue === nextValue) count++;
      else {
        str = count > 1 ? str + count + currentValue : str + currentValue;
        count = 1;
      }
    }
    result.push(str.length);
  }

  console.log(result);

  // 문자열의 길이가 가장 작은 수 리턴
  return Math.min(...result);
}
console.log(solution('ababcdcdababcdcd'));
ababcdcdababcdcd;
