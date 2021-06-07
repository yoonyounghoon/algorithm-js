// 2021 카카오 블라인드 - 신규 아이디 추천

// 1단계 :new_id의 모든 대문자를 소문자로 치환하는 메서드
function makeLowerCase(id) {
  return id.toLowerCase();
}

// 2단계 : new_id 문자열에서 알파벳 소문자, 숫자, -, _, . 제외한 문자 제거
function charFilter(id) {
  const regex = /([a-z]|[0-9]|[-_\.])/g;
  return id.match(regex).join('');
}

// 3단계 : new_id에서 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)치환
function replace(id) {
  let newId = id;
  while (newId.includes('..')) {
    newId = newId.replace(/\.\./g, '.');
  }
  return newId;
}

//  4단계 : new_id에서 마침표(.)가 처음이나 끝에 위치한다면 제거합니다.
function removeStartEnd(id) {
  if (id.startsWith('.')) {
    return id.slice(1);
  } else if (id.endsWith('.')) {
    return id.slice(0, id.length);
  } else if (id.startsWith('.') && id.endsWith('.')) {
    return id.slice(1, id.length);
  }
  return id;
}

// 5단계 new_id가 빈 문자열이라면, new_id에 "a"를 대입합니다.
function checkNull(id) {
  if (id.length === 0) return id + 'a';
  return id;
}

// 6단계 new_id의 길이가 16자 이상이면, new_id의 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거합니다.
// 만약 제거 후 마침표(.)가 new_id의 끝에 위치한다면 끝에 위치한 마침표(.) 문자를 제거합니다.
function checkMaxLength(id) {
  let newId = id;
  if (id.length >= 16) {
    newId = id.substring(0, 15);
    if (newId.endsWith('.')) {
      return newId.substring(0, 15);
    }
    return newId;
  }
}

// 7단계 new_id의 길이가 2자 이하라면, new_id의 마지막 문자를 new_id의 길이가 3이 될 때까지 반복해서 끝에 붙입니다.
function checkMinLength(id) {
  let newId = id;
  while (newId.length < 3) {
    newId = newId + id[id.length - 1];
  }
  return newId;
}

function solution(new_id) {
  let id = makeLowerCase(new_id);

  id = charFilter(id);

  id = replace(id);

  id = removeStartEnd(id);

  // id = checkNull(id);

  // id = checkMaxLength(id);

  // id = checkMinLength(id);

  return id;
}
// console.log(solution('...!@BaT#*..y.abcdefghijklm'));
console.log(solution('z-+.^.'));
// console.log(solution('=.='));
// console.log(solution('123_.def'));
// console.log(solution('abcdefghijklmn.p'));
