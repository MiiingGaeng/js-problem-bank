/**
 * [(lv.3)설정값-보존하기.js]
 *
 * createConfigManager 함수를 작성하세요.
 *  1) 함수 내부에 config 객체({ key: value })를 보관합니다.
 *  2) 외부에서는 이 config 객체를 직접 수정할 수 없습니다.
 *  3) 반환 객체에는 setConfig(key, value)와 getConfig(key) 메서드가 있어야 합니다.
 *
 * 예)
 *   const manager = createConfigManager();
 *   manager.setConfig("theme", "dark");
 *   console.log(manager.getConfig("theme")); // "dark"
 *
 * @returns {{ setConfig: Function, getConfig: Function }}
 */

// TODO: createConfigManager 함수를 작성하세요.
function createConfigManager() {
  const config = {};

  function setConfig(key, value) {
    return (config[key] = value);
  }

  function getConfig(key) {
    return config[key];
  }

  return { setConfig, getConfig };
}

// export 를 수정하지 마세요.
export { createConfigManager };
