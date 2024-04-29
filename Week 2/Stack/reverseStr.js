class Stack {
  constructor() {
    this.items = [];
  }
  push(element) {
    return this.items.push(element);
  }
  pop() {
    return this.items.pop();
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

function reverseStr(str) {
  const stack = new Stack();
  for (let i = 0; i < str.length; i++) {
    stack.push(str[i]);
  }
  let reversedStr = "";
  while (!stack.isEmpty()) {
    reversedStr += stack.pop();
  }

  return reversedStr;
}

console.log(reverseStr("Hello World"));
