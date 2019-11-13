const fs = require("fs");
const loader = require("assemblyscript/lib/loader");
const wasm = loader.instantiateSync(fs.readFileSync("./build/optimized.wasm"));
module.exports = wasm;
