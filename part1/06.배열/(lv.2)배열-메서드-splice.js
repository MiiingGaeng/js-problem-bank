/**
 * [(lv.2)배열-메서드-splice.js]
 *
 * 아래 내용을 구현하세요:
 * removeAndInsert(arr, start, deleteCount, ...items):
 * - arr 배열의 start 인덱스부터 deleteCount만큼 요소를 제거한 뒤,
 *   그 자리에 items를 삽입하세요.
 * - 반드시 splice 메서드를 사용해야 합니다.
 * - 원본 배열 arr를 직접 조작하고, 조작된 배열을 반환하세요.
 *
 * @param {any[]} arr
 * @param {number} start
 * @param {number} deleteCount
 * @param  {...any} items
 * @returns {any[]} 조작 후의 arr
 */
function removeAndInsert(arr, start, deleteCount, ...items) {
  if (!start) start = 0;
  arr.splice(start, deleteCount, ...items);

  return arr;
}

const arr = [1, 2, 3, 4];
removeAndInsert(arr, 1, 2, 'a', 'b');

// export를 수정하지 마세요.
export { removeAndInsert };
