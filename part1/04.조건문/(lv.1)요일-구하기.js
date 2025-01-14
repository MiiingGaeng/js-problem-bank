/**
 * [(lv.1)요일-구하기.js]
 *
 * 요일 번호(dayNumber)를 전달받아 해당 요일을 한글로 반환하세요.
 * 1은 "월", 2는 "화", ..., 7은 "일"입니다.
 * 1부터 7 사이의 숫자가 아니면 "Invalid"를 반환하세요.
 * 반드시 switch문을 사용하세요.
 *
 * @param {number} dayNumber
 * @returns {string} "월", "화", ..., "일" or "Invalid"
 */
function getDayName(dayNumber) {
  switch (dayNumber) {
    case 1:
      return '월';
      break;
    case 2:
      return '화';
      break;
    case 3:
      return '수';
      break;
    case 4:
      return '목';
      break;
    case 5:
      return '금';
      break;
    case 6:
      return '토';
      break;
    case 7:
      return '일';
      break;
    default:
      return 'Invalid';
  }
}

// export 를 수정하지 마세요.
export { getDayName };
