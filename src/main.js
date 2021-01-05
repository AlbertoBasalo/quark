export { sayHello, sum };
function sayHello(yourName) {
  console.log(`Hello ${yourName}`);
}
function sum(a, b) {
  return a + b;
}
const myName = 'Quark';
sayHello(myName);
