const words = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};

function solution(s) {
  let str = s;

  for (let item in words) {
    if (str.includes(item)) {
      let regex = new RegExp(`${item}`, 'g');
      str = str.replace(regex, words[item]);
    }
  }

  return Number(str);
}

console.log(solution('one4seveneightone'));
