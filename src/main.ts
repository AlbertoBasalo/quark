export { sayHello, sum };

function sayHello(yourName: string): string {
  const helloMessage = `Hello ${yourName}`;
  console.log(helloMessage);
  return helloMessage;
}
function sum(a: number, b: number): number {
  if (a == 0) {
    return b;
  }
  return a + b;
}
const myName = "Quark!";
sayHello(myName);
console.log(sum(1, 2));
