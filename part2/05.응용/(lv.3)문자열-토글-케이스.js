/**
 * [(lv.3)문자열 토글 케이스.js]
 *
 * 1) 문자열의 각 문자가 대문자면 소문자로, 소문자면 대문자로 바꿔 반환하세요.
 * 2) 알파벳 이외의 문자는 그대로 둡니다.
 * 3) 예: toggleCase('Abc123') -> 'aBC123'
 *
 * @param {string} str
 * @returns {string}
 */

// TODO: 함수를 작성하세요 (예: toggleCase)
function toggleCase(str) {
  // TODO
  const arrStr = str.split('');
  const arrToggled = arrStr.map((char) => {
    //소문자이면 => 대문자로
    if (char === char.toLowerCase()) return char.toUpperCase();
    //대문자이면 => 소문자로
    if (char === char.toUpperCase()) return char.toLowerCase();
  });

  return arrToggled.join('');
}

// export 를 수정하지 마세요.
export { toggleCase };
