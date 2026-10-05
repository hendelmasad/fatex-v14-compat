Hooks.on("init", () => {
  const utils = foundry.utils;
  const globals = {
    duplicate: utils.duplicate,
    mergeObject: utils.mergeObject,
    deepClone: utils.deepClone,
    getProperty: utils.getProperty,
    setProperty: utils.setProperty,
    expandObject: utils.expandObject,
    flattenObject: utils.flattenObject,
    isObjectEmpty: utils.isEmpty,
  };
  for (const [name, fn] of Object.entries(globals)) {
    if (typeof globalThis[name] === "undefined") {
      globalThis[name] = fn;
      console.log(`fatex-v14-compat | ✅ Restored global: ${name}()`);
    }
  }
});
