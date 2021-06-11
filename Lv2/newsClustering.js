/* 2018 KAKAO BLIND RECRUITMENT
[1차] 뉴스 클러스터링 */

function solution(str1, str2) {
  let A = [];
  let B = [];
  let interSection = [];
  let union = [];
  // 2글자씩 끊어서 다중집합의 원소 만들기

  // 집합 A
  for (let i = 0; i < str1.length - 1; i++) {
    A.push(str1[i] + str1[i + 1]);
  }
  // 영문자로 된 글자 쌍만 남기기
  A = A.filter((value) => value.match(/[a-zA-Z]{2}/));
  A = A.map((value) => value.toLowerCase());

  // 집합 b
  for (let i = 0; i < str2.length - 1; i++) {
    B.push(str2[i] + str2[i + 1]);
  }
  // 영문자로 된 글자 쌍만 남기기
  B = B.filter((value) => value.match(/[a-zA-Z]{2}/));
  B = B.map((value) => value.toLowerCase());

  if (A.length === 0 && B.length === 0) return 65536;

  console.log(A);
  console.log(B);

  // 교집합 구하기
  for (let i = 0; i < A.length; i++) {
    // 교집합에 원소가 없고 B에 있다면
    if (interSection.indexOf(A[i]) === -1 && B.indexOf(A[i]) > -1) {
      let tempA = A.filter((value) => value === A[i]).length;
      let tempB = B.filter((value) => value === A[i]).length;
      if (tempA < tempB) {
        for (let j = 0; j < tempA; j++) {
          interSection.push(A[i]);
        }
      } else {
        for (let j = 0; j < tempB; j++) {
          interSection.push(A[i]);
        }
      }
    }
  }

  // 합집합 구하기
  for (let i = 0; i < A.length; i++) {
    // B에 없다면 push
    if (B.indexOf(A[i]) === -1) union.push(A[i]);
    // union에 원소가 없고 B에 있다면 A집합과 B집합중 더 많은 수를 넣어 줌.
    else if (union.indexOf(A[i]) === -1 && B.indexOf(A[i]) > -1) {
      let tempA = A.filter((value) => value === A[i]).length;
      let tempB = B.filter((value) => value === A[i]).length;
      if (tempA > tempB) {
        for (let j = 0; j < tempA; j++) {
          union.push(A[i]);
        }
      } else {
        for (let j = 0; j < tempB; j++) {
          union.push(A[i]);
        }
      }
    }
  }
  for (let i = 0; i < B.length; i++) {
    // A에 없다면 push
    if (A.indexOf(B[i]) === -1) union.push(B[i]);
    // A에 있다면 A집합과 B집합중 더 많은 수를 넣어 줌.
  }
  console.log(`교집합 : ${interSection}`);
  console.log(`합 : ${union}`);

  // 문제에서 요구하는 자카드 유사도
  return Math.floor((interSection.length / union.length) * 65536);
}
console.log(solution('aa1+aa2', 'AAAA12'));
