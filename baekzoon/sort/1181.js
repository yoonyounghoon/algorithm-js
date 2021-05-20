/* 길이가 짧은 것부터
길이가 같으면 사전 순으로 */

function wordSort(words) {
  const result = new Set([...words]);
  let arr = [...result];
  arr.sort((a, b) => {
    if (a.length < b.length) {
      return -1;
    }
    if (a.length > b.length) {
      return 1;
    }
    // 길이가 같으면
    if (a.length === b.length) {
      return a.localeCompare(b);
    }
  });
  return arr.forEach((word) => {
    console.log(word);
  });
}
console.log(
  wordSort([
    'but',
    'i',
    'wont',
    'hesitate',
    'no',
    'more',
    'no',
    'more',
    'it',
    'cannot',
    'wait',
    'im',
    'yours',
  ]),
);
