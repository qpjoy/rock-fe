// fast glob
const globalModules = import.meta.glob("./glob/*");
// const globalModules = import.meta.globEager("./glob/*");

console.log(globalModules);
Object.entries(globalModules).forEach(([k, v]) => {
  console.log(k + ":");
  v().then((m) => console.log(k + ":" + m.default));
});
