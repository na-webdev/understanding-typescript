function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log(num);
}

printResult(add(2, 4));

let combineValues: (a: number, b: number) => number;

combineValues = add;
printResult(combineValues(90, 100));

function addAndHandle(n1: number, n2: number, cb: (val: number) => void): void {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(20, 30, (val) => {
  console.log(val);
});

function sendRequest(data: string, cb: (response: any) => void) {
  // ... sending a request with "data"
  return cb({ data: "Hi there!" });
}

sendRequest("Send this!", (response) => {
  console.log(response);
  return true;
});

// let someValue: undefined;
