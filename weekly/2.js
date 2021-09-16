// 최종 리턴값 : 학점들을 더한 문자열 "ABBCC";
// 조건 : 자기 자신을 평가한 점수가 유일한 최고점, 유일한 최저점이면 제외하고 구함

function solution(scores) {
  const answer = [];

  scores.forEach((score, index) => {
    let studentScore = [];
    let avgScore = 0;
    // 각 학생의 점수들을 추출하고
    for (let i = 0; i < scores.length; i++) {
      studentScore.push(scores[i][index]);
    }
    // 점수들 중 자신이 준 점수가 가장 높고 유일하다면 제외 시킨 후 평균을 구함
    const maxScore = Math.max(...studentScore);
    const minScore = Math.min(...studentScore);
    if (
      (maxScore === studentScore[index] &&
        studentScore.indexOf(maxScore) ===
          studentScore.lastIndexOf(maxScore)) ||
      (minScore === studentScore[index] &&
        studentScore.indexOf(minScore) === studentScore.lastIndexOf(minScore))
    ) {
      studentScore.splice(index, 1);
      avgScore =
        studentScore.reduce((acc, cur) => acc + cur, 0) / studentScore.length;
    } else {
      avgScore =
        studentScore.reduce((acc, cur) => acc + cur, 0) / studentScore.length;
    }
    // 평균에 따라서 점수를 최종 리턴할 배열에 푸쉬
    if (avgScore >= 90) {
      answer.push('A');
    } else if (avgScore >= 80) {
      answer.push('B');
    } else if (avgScore >= 70) {
      answer.push('C');
    } else if (avgScore >= 50) {
      answer.push('D');
    } else {
      answer.push('F');
    }
  });

  return answer.join('');
}
console.log(
  solution([
    [100, 90, 98, 88, 65],
    [50, 45, 99, 85, 77],
    [47, 88, 95, 80, 67],
    [61, 57, 100, 80, 65],
    [24, 90, 94, 75, 65],
  ]),
);
