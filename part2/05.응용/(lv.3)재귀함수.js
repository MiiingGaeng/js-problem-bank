/**
 * [(lv.3)재귀함수.js]
 *
 * 1) factorial 함수를 작성하세요.
 * 2) n을 입력받아 해당 숫자의 팩토리얼(1부터 n까지의 곱)을 재귀로 계산하세요.
 * 3) n이 1 이하이면 1을 반환하세요. (0! = 1, 1! = 1)
 *
 * @param {number} n
 * @returns {number}
 */

function factorial(n) {
  return n <= 1 ? 1 : n * factorial(n - 1);
}

// export 를 수정하지 마세요.
export { factorial };
