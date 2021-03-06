const caesarCipher = (string, number) => {
  let str = "";

  for (let i = 0; i < string.length; i++) {
    if (string[i] === " ") {
      str += " ";
    } else if (string[i].charCodeAt() >= 122) {
      let indexValue = 96 + number;
      str += String.fromCharCode(indexValue);
    } else {
      let indexValue = string[i].charCodeAt() + number;
      str += String.fromCharCode(indexValue);
    }
  }
  return str;
};

console.log(caesarCipher("AB", 1));
console.log(caesarCipher("z", 1));
console.log(caesarCipher("a B z", 4));
