// 언어 선호도 * 직업군 언어 점수의 총합이 가장 높은 직업군 반환

// return 할 문자열은 "SI", "CONTENTS", "HARDWARE", "PORTAL", "GAME" 중 하나입니다

function solution(table, languages, preference) {
  const scores = [];
  const tables = ['SI', 'CONTENTS', 'HARDWARE', 'PORTAL', 'GAME'];
  const result = [];

  const preferenceOfKind = table.map((kind) => kind.split(' '));

  // 각 배열들을 돌면서 languages들의 직업군 언어 점수를 더함
  preferenceOfKind.forEach((kind) => {
    // 점수들을 저장할 공간
    let sum = 0;

    // 배열 형태
    languages.forEach((language, index) => {
      let rankOfLanguage = kind.indexOf(language);
      switch (rankOfLanguage) {
        case 1:
          sum += 5 * preference[index];
          break;
        case 2:
          sum += 4 * preference[index];
          break;
        case 3:
          sum += 3 * preference[index];
          break;
        case 4:
          sum += 2 * preference[index];
          break;
        case 5:
          sum += 1 * preference[index];
          break;
        default:
      }
    });

    scores.push(sum);
  });

  // 직군별 가장 높은 점수를 찾고
  const maxScore = Math.max(...scores);
  // 최대값에 해당하는 인덱스들을 찾아서
  scores.forEach((score, index) => {
    if (score === maxScore) {
      result.push(tables[index]);
    }
  });
  return result.sort()[0];
}
console.log(
  solution(
    [
      'SI JAVA JAVASCRIPT SQL PYTHON C#',
      'CONTENTS JAVASCRIPT JAVA PYTHON SQL C++',
      'HARDWARE C C++ PYTHON JAVA JAVASCRIPT',
      'PORTAL JAVA JAVASCRIPT PYTHON KOTLIN PHP',
      'GAME C++ C# JAVASCRIPT C JAVA',
    ],
    ['PYTHON', 'C++', 'SQL'],
    [7, 5, 5],
  ),
);
