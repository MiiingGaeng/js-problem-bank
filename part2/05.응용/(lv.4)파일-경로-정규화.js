/**
 * [(lv.4)파일-경로-정규화.js]
 *
 * - normalizePath 함수를 작성하세요.
 * - 이 함수는 파일 경로에서 '.'와 '..'를 처리하여 경로를 정규화합니다.
 * - '/' 문자로 구분된 경로 요소를 배열로 만든 뒤,
 *   '.'이면 무시, '..'이면 이전 요소 제거를 통해 처리하세요.
 * - 시작과 끝의 '/' 처리를 주의하되, 중간의 연속된 '/'는 하나로 합쳐야 합니다.
 * - 예: "/a/b/../c" => "/a/c", "./a//b/./c/" => "a/b/c/", "/a/../../b" => "/b"
 *
 * @param {string} path
 * @returns {string}
 */

function normalizePath(path) {
  const splitedPath = path.split("/");
  const resultStack = [];

  for (let item of splitedPath) {
    if (!item || item === ".") continue;

    if (item === "..") {
      resultStack.length > 0 && resultStack.pop();
    } else {
      resultStack.push(item);
    }
  }

  let resultPath = resultStack.join("/");
  if (path.startsWith("/") && resultPath !== "/") resultPath = "/" + resultPath;
  if (path.endsWith("/") && resultPath !== "/") resultPath = resultPath + "/";

  return resultPath;
}

// export 를 수정하지 마세요.
export { normalizePath };
