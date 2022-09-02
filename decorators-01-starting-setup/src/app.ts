function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  return function <T extends { new (...args: any[]): { name: string } }>(
    originalConstructor: T
  ) {
    return class extends originalConstructor {
      constructor(..._: any[]) {
        super();
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
          hookEl.innerHTML = template;
          hookEl.querySelector("h1")!.textContent = this.name;
        }
      }
    };
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

function AutoBind(_: any, _2: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const adjustedDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    },
  };

  return adjustedDescriptor;
}

class Printer {
  message = "This is important message";

  @AutoBind
  showMessage() {
    console.log(this.message);
  }
}

const newPrinter = new Printer();

const button = document.getElementById("button")!;
button.addEventListener("click", newPrinter.showMessage);
