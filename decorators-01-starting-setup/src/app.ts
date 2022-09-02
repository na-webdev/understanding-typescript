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

function PropertyDecorator(target: any, propertyName: string | Symbol) {
  console.log("Property decorator");
  console.log(target, propertyName);
}

function AccessorDecorator(
  target: any,
  name: string,
  descriptor: PropertyDescriptor
) {
  console.log("Accessor decorator");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function MethodDecorator(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log("Method decorator");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function ParameterDecorator(
  target: any,
  name: string | Symbol,
  position: number
) {
  console.log("Parameter decorator");
  console.log(target);
  console.log(name);
  console.log(position);
}

@Logger("Logging - Person")
@WithTemplate("<h1>My person object</h1>", "app")
class Person {
  name = "John";
  @PropertyDecorator
  title = "Person decorator";

  private _wage: number;

  constructor() {
    console.log("Creating person object");
    this._wage = 0;
  }

  @AccessorDecorator
  set wage(@ParameterDecorator amount: number) {
    this._wage = amount;
  }

  @MethodDecorator
  getWage() {
    return this._wage;
  }
}

const pers = new Person();

console.log(pers);
