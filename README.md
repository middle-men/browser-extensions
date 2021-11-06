# Omniboard Browser Extensions

## Development

### WASM

To build the WebAssembly code, run :

```sh
wasm-pack build --target web
```

Then move the generated `pkg` folder to `browser-extensions/webext/`.

### Browser extension

To test the extension while developing :

#### Chrome

1. go to `chrome://extensions`
2. enable "Developer Mode" in the top right corner
3. click "Load unpacked" and choose your folder

#### Firefox

1. go to `about:debugging`
2. click on "This Firefox"
3. click load the temporary add-on

Use [web-ext](https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/) CLI.
