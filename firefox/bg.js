import init, { greet } from "./pkg/wasm.js";
init()
    .then(() => {
        greet("WebAssembly")
    })