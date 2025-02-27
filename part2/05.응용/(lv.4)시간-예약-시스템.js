/**
 * [(lv.4)시간-예약-시스템.js]
 *
 * 1) scheduleNextAvailableTime 함수는 이미 예약된 시간대 목록(reservations)과 예약 시간 길이(timeLength)를 인자로 받습니다.
 * 2) reservations 배열은 [{ start: number, end: number }, ...] 형태를 지니며, 모든 시간은 정수(단위: 시)입니다.
 * 3) 예약 목록이 비어 있다면, 0 시점부터 예약이 가능하다고 가정하여 0을 반환합니다.
 * 4) 예약이 하나 이상 있을 경우, "가장 이른 예약의 start 시점 이전"은 사용하지 않는다고 전제합니다. 즉, 예약 가능 시간은
 *    첫 번째 예약의 start 시점부터 시작됩니다.
 *    - 예약들 사이의 “간격”이 timeLength 이상이면, 해당 간격의 시작점(이전 예약의 end)을 바로 반환합니다.
 *    - 모든 간격이 부족하면, 마지막 예약의 end 이후로 배정이 가능하다고 보고, 그 시점을 반환합니다.
 * 5) 예시:
 *    - reservations: [{ start:10, end:12 }, { start:14, end:15 }]
 *    - timeLength: 1
 *    - 결과: 첫 예약의 start 전(0~10)은 고려하지 않고, 10~12, 14~15 사이의 12~14는 2시간 → timeLength=1 가능 → 반환 12
 * 6) 만약 전체 타임라인 상에서 이 방식으로도 예약 불가능이라면, 문제 요건에 따라 마지막 예약 이후를 반환하거나 null을 반환할 수 있습니다.
 *    여기서는 “마지막 예약 이후 반환”으로 가정합니다.
 *
 * @param {{
 *   start: number,
 *   end: number
 * }[]} reservations
 * @param {number} timeLength
 * @returns {number | null}
 */

// TODO: scheduleNextAvailableTime 함수를 작성하세요.
function scheduleNextAvailableTime(reservations, timeLength) {
  //예외처리 : 예약목록 0
  if (reservations.length === 0) return 0;

  //시간 순으로 정렬
  reservations.sort((a, b) => a.start - b.start);

  const availableTime = reservations.reduce((acc, currentReservation) => {
    let nextStartTime = currentReservation.start;

    if (nextStartTime - acc >= timeLength && acc !== 0) {
      return acc;
    } else {
      acc = currentReservation.end;
      return acc;
    }
  }, 0);

  return availableTime;
}

// export 를 수정하지 마세요.
export { scheduleNextAvailableTime };
