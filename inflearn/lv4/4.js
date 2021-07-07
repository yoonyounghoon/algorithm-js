function solution(m, product) {
  let result = [];

  for (let i = 0; i < product.length; i++) {
    // 예산
    let money = m;

    // 카운트 수
    let count = 0;

    // 상품가격 50% 할인 하기
    product[i][0] = product[i][0] * 0.5;

    // 배송비와 상품가격의 합으로 새로운 배열 만들고
    // 오름차순으로 정렬
    let sortedArr = product
      .map((value) => value.reduce((acc, cur) => acc + cur))
      .sort((a, b) => a - b);

    // 예산으로 살 수 있는 개수 체크
    for (let j = 0; j < sortedArr.length; j++) {
      if (sortedArr[j] > money) {
        break;
      }
      money -= sortedArr[j];
      count++;
    }

    result.push(count);

    // 할인했던 상품가격 다시 원래 가격으로 바꿔주기
    product[i][0] = product[i][0] * 2;
  }

  return Math.max(...result);
}

let arr = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];
console.log(solution(28, arr));
