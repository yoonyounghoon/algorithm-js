const rightParenthesis = (string) => {
  let leftCount = 0;
  let rightCount = 0;
  let arr = string.split("");

  if (arr[0] === ")" || arr[arr.length - 1] === "(") {
    return false;
  }

  arr.map((value) => {
    if (rightCount > leftCount) return false;
    else if (value === "(") leftCount++;
    else if (value === ")") rightCount++;
  });

  return leftCount === rightCount ? true : false;
};

console.log(rightParenthesis("()()"));
console.log(rightParenthesis("(())()"));
console.log(rightParenthesis(")()("));
console.log(rightParenthesis("(()("));
console.log(rightParenthesis("()))((()"));
