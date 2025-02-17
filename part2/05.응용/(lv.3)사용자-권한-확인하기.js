/**
 * [(lv.3)사용자-권한-확인하기.js]
 *
 * 1) user.role은 "admin" > "manager" > "user" 순으로 높음
 * 2) checkAccess(user, requiredRole)를 호출하면,
 *    user가 requiredRole 이상의 권한을 가졌으면 true, 아니면 false를 반환하세요.
 *
 * 예시) checkAccess({ name: "Alice", role: "admin" }, "user"); // true
 *      checkAccess({ name: "Bob", role: "manager" }, "admin"); // false
 *
 * @param {{name:string, role:string}} user
 * @param {string} requiredRole
 * @returns {boolean}
 */

const ROLE_NUMBER = {
  admin: 3,
  manager: 2,
  user: 1
};

function checkAccess(user, requiredRole) {
  const userRole = user.role;

  const userRoleNum = ROLE_NUMBER[userRole];
  const requiredRoleNum = ROLE_NUMBER[requiredRole];

  return userRoleNum >= requiredRoleNum ? true : false;
}

// export를 수정하지 마세요.
export { checkAccess };
