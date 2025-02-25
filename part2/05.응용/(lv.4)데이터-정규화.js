/**
 * [(lv.4)데이터-정규화.js]
 *
 * 1) normalizeData 함수는 ID 기반으로 데이터(객체 배열)를 정규화합니다.
 * 2) 입력 데이터 예시: [{ id: 1, name: "A" }, { id: 2, name: "B" }, ...]
 * 3) 반환 데이터는 다음 형태를 가집니다:
 *    {
 *      byId: {
 *        '1': { id: 1, name: "A" },
 *        '2': { id: 2, name: "B" },
 *        ...
 *      },
 *      allIds: [1, 2, ...]
 *    }
 * 4) ID 값은 유일하다고 가정합니다.
 *
 * 예)
 *   normalizeData([{ id:1, name:"A" }, { id:2, name:"B" }])
 *   => {
 *        byId: { '1': { id:1, name:"A" }, '2': { id:2, name:"B" } },
 *        allIds: [1, 2]
 *      }
 *
 * @param {
 *  { id: number, name: string }[]
 * } data
 * @returns {Object}
 */

// TODO: normalizeData 함수를 작성하세요.
function normalizeData(data) {
  const result = { byId: {}, allIds: [] };
  data.reduce((acc, cur) => {
    acc.byId[cur.id] = cur;
    acc.allIds.push(cur.id);

    return acc;
  }, result);

  return result;
}

// export를 수정하지 마세요.
export { normalizeData };
