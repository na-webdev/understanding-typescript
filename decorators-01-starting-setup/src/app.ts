function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  return function (constructor: any) {
    const hookEl = document.getElementById(hookId);
    const newPerson = new constructor();
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector("h1")!.textContent = newPerson.name;
    }
  };
}

@Logger("Logging - Person")
@WithTemplate("<h1>My person object</h1>", "app")
class Person {
  name = "Abdurahim";

  constructor() {
    console.log("Creating person object");
  }
}

const pers = new Person();

console.log(pers);
