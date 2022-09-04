function addValues(
  n1: number,
  n2: number,
  showResult: boolean,
  phrase: string
) {
  // if (typeof n1 !== "number" || typeof n2 !== "number") {
  //   throw new Error("Incorret input");
  // }
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
}

const number1 = 2;
const number2 = 2.8;

const result = addValues(number1, number2, false, "Result is: ");
console.log(result);
