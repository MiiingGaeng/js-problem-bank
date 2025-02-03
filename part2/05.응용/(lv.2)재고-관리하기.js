/**
 * [(lv.2)재고-관리하기.js]
 *
 * 1) inventory는 [{ id, name, stock }, ...] 형태의 배열입니다.
 * 2) addProduct(newItem)를 호출하면,
 *    - 만약 동일한 id가 이미 존재한다면, 해당 항목의 stock만 newItem.stock만큼 증가시킵니다.
 *    - 같은 id가 없으면 inventory에 새 항목을 추가합니다.
 *
 * @param {{id:number, name:string, stock:number}} newItem
 * @returns {void}
 */

const inventory = [
  { id: 100, name: 'Keyboard', stock: 10 },
  { id: 200, name: 'Mouse', stock: 5 },
];

function addProduct(newItem) {
  inventory.map((item) => {
    return item.id === newItem.id
      ? (item.stock += newItem.stock)
      : inventory.push(newItem);
  });
}

// export를 수정하지 마세요.
export { inventory, addProduct };
