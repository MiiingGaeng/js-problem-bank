/**
 * [(lv.3)날짜-포맷팅-하기.js]
 *
 * 1) formatDate 함수를 작성하세요.
 * 2) Date 객체를 입력받아 "YYYY년 MM월 DD일 HH시 mm분" 형식으로 문자열을 반환하세요.
 * 3) 월, 일, 시, 분이 한 자리면 앞에 0을 붙이세요.
 * 4) 예: 2021년 1월 1일 1시 1분 → "2021년 01월 01일 01시 01분"
 *
 * @param {Date} date
 * @returns {string}
 */

function formatDate(date) {
  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let hours = date.getHours();
  let minutes = date.getMinutes();

  //1자리의 경우 0을 붙이도록 처리
  String(month).length === 1 ? (month = String(month).padStart(2, '0')) : month;
  String(day).length === 1 ? (day = String(day).padStart(2, '0')) : day;
  String(hours).length === 1 ? (hours = String(hours).padStart(2, '0')) : hours;
  String(minutes).length === 1
    ? (minutes = String(minutes).padStart(2, '0'))
    : minutes;

  return `${year}년 ${month}월 ${day}일 ${hours}시 ${minutes}분`;
}

// export를 수정하지 마세요.
export { formatDate };
