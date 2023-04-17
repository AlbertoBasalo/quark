export function sayHello(yourName: string): string {
  const helloMessage = `Hello ${yourName}`;
  console.log(helloMessage);
  return helloMessage;
}
export function sum(a: number, b: number): number {
  if (a == 0) {
    return b;
  }
  return a + b;
}
