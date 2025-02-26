/**
 * [(lv.4)복잡한-데이터-필터링.js]
 *
 * filterComplexData 함수는 아래 형태의 복잡한 객체 배열을 입력받습니다:
 * [
 *   {
 *     id: 1,
 *     tags: ["React", "JavaScript"],
 *     info: { likes: 100, active: true },
 *   },
 *   {
 *     id: 2,
 *     tags: ["Node.js", "TypeScript"],
 *     info: { likes: 50, active: false },
 *   },
 *   ...
 * ]
 *
 * 두 번째 파라미터로 조건 객체(conditions)를 받습니다.
 * 조건 객체의 키는 'tags'처럼 배열 요소를 요구할 수도 있고,
 * "info.active"처럼 중첩된 프로퍼티를 '.' 문법으로 가리킬 수도 있습니다.
 *
 * 조건에 맞는 데이터만 필터링하여 반환하세요.
 * - 예: { tags: "JavaScript", "info.active": true }
 *   => tags 배열에 "JavaScript"를 포함하고, info.active가 true 인 요소만 반환
 *
 * @param {{
 *   id: number,
 *   tags: string[],
 *   info: {
 *     likes: number,
 *     active: boolean
 *   }
 * }[]} data
 * @param {Object} conditions
 * @returns {Array}
 */

function filterComplexData(data, conditions) {
  //condition이 없을 때 data 반환
  if (conditions.length === 0) return data;

  return data.filter((item) => {
    for (let key in conditions) {
      let expectedValue = conditions[key];
      let actualValue = getValue(item, key);

      // 배열이면 포함 여부 체크
      if (Array.isArray(actualValue) && !actualValue.includes(expectedValue)) {
        return false;
      }

      // 일반 값 비교
      if (!Array.isArray(actualValue) && actualValue !== expectedValue) {
        return false;
      }
    }
    return true;
  });
}

const getValue = (obj, key) => {
  let keys = key.split(".");
  let value = obj;

  for (let k of keys) {
    if (!value) return undefined;
    value = value[k];
  }

  return value;
};

export { filterComplexData };
