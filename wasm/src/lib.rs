use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern "C" {
    #[wasm_bindgen(js_namespace = console)]
    fn log(s: &str);

    #[wasm_bindgen(js_namespace = console, js_name = log)]
    fn log_u64(a: u64);
}

#[wasm_bindgen]
pub fn greet(s: &str) {
    log(&format!("Hello {}", s));
    log_u64(42);
}
