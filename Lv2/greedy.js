/**
 * 
 ----- 동전 거스름돈 문제 ------
 function solution(won) {
   const coins = [500, 100, 50, 10];
   let count = 0;
 
   for (coin of coins) {
     count += Math.floor(won / coin);
     won = won % coin;
   }
   return count;
 }
 console.log(solution(1260));
 */

/*
1이 될때까지 
N에서 1을 빼거나, N을 K로 나눠
function solution(N, K) {
    let count = 0;
    let number = N;
    while (number !== 1) {
        if (number % K === 0) {
            number = number / K;
        } else {
            number -= 1;
        }
        count++;
    }
    return count; 
}
console.log(solution(17, 4));
console.log(solution(25, 3));
*/

/* // 곱하기 혹은 더하기
function solution(string) {
  let strArr = string.split('');
  let numArr = strArr.map((value) => Number(value));
  let result = 0;
  if (numArr[0] < 2 || numArr[1] < 2) result = numArr[0] + numArr[1];
  else result = numArr[0] * numArr[1];

  if (numArr.length === 2) {
    return result;
  }

  for (let i = 2; i < numArr.length; i++) {
    if (numArr[i] < 2 || numArr[i + 1] < 2) {
      result += numArr[i];
    } else {
      result *= numArr[i];
    }
  }

  return result;
}
console.log(solution('02984'));
console.log(solution('567')); */
