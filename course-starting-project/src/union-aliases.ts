type Combinable = number | string;
type ConversionDescriptor = "as-number" | "as-text";

function combine(
  val1: Combinable,
  val2: Combinable,
  resultConversion: ConversionDescriptor
) {
  let result: number | string;
  if (
    (typeof val1 === "number" && typeof val2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +val1 + +val2;
  } else {
    result = val1.toString() + val2.toString();
  }
  return result;
  // if (resultConversion === "as-number") return +result;
  // else return result.toString();
}

const combinedAges = combine(12, 34, "as-number");
console.log(combinedAges);

const combinedStringAges = combine("12", "34", "as-number");
console.log(combinedStringAges);

const combinedNames = combine("Do it now", "Have fun", "as-text");
console.log(combinedNames);
