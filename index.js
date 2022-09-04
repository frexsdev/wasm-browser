async function start() {
  const wasm = await WebAssembly.instantiateStreaming(
    fetch("./hello.wasm"),
    {
      js: {
        print: x => console.log(x),
      }
    });
  wasm.instance.exports.hello(34, 35);
}

start().catch(e => console.error(e));