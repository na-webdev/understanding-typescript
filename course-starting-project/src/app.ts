let userInput: unknown; // more strict
let userName: string; // ts does not run type checking

userInput = 4;
userInput = "20";

if (typeof userInput === "string") userName = userInput;

function generateError(message: string, code: number): never {
  throw { message, code };
}

console.log("Watching changes");
generateError("Something bad happened", 500);
