/**
 * [(lv.3)state-함수.js]
 *
 * 1) makeState 함수는 초기 값(initialValue)을 인자로 받습니다.
 * 2) 내부에 상태(currentValue)를 보관합니다.
 * 3) 반환하는 배열의 첫 번째 요소는 현재 상태, 두 번째 요소는 상태를 업데이트하는 함수(setValue)입니다.
 * 4) setValue 함수를 호출하면 새로운 상태로 업데이트하고, 그 값을 반환해야 합니다.
 *
 * @param {any} initialValue
 * @returns {[any, Function]}
 */

function makeState(initialValue) {
  let state = initialValue;

  const setValue = (currentValue) => {
    return (state = currentValue);
  };

  return [state, setValue];
}

// export를 수정하지 마세요.
export { makeState };
