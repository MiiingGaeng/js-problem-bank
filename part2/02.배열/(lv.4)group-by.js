/**
 * [(lv.4)group-by.js]
 *
 * 객체 배열(arr)과 프로퍼티 이름(key)을 받아,
 * 해당 key의 값에 따라 객체를 묶어 { keyValue: Object[] } 형태로 반환하세요.
 * reduce 메서드를 사용하세요.
 *
 * 예:
 * const data = [
 *   { name: 'Alice', group: 'A' },
 *   { name: 'Bob', group: 'B' },
 *   { name: 'Charlie', group: 'A' }
 * ];
 * groupBy(data, 'group') =>
 * {
 *   A: [
 *     { name: 'Alice', group: 'A' },
 *     { name: 'Charlie', group: 'A' }
 *   ],
 *   B: [
 *     { name: 'Bob', group: 'B' }
 *   ]
 * }
 *
 * @param {Object[]} arr
 * @param {string} key
 * @returns {Object}
 */

// TODO: groupBy 함수를 작성하세요.
function groupBy(arr, key) {
  // 배열.reduce((누적값, 현잿값, 인덱스, 요소) => { return 결과 }, 초깃값);
  return arr.reduce((acc, cur) => {
    let category = cur[key];
    !acc[category] ? (acc[category] = [cur]) : acc[category].push(cur);
    return acc;
  }, {});

  return groupObj;
}

// export를 수정하지 마세요.
export { groupBy };
