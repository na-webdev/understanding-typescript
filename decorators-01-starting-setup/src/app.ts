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
      return originalMethod.bind(this);
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

interface ValidatorConfig {
  [property: string]: {
    [validatableProp: string]: string[];
  };
}

const registeredValidators: ValidatorConfig = {};

function Required(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: [
      ...(registeredValidators[target.constructor.name]?.[propName] ?? []),
      "required",
    ],
  };
}

function PositiveNumber(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: [
      ...(registeredValidators[target.constructor.name]?.[propName] ?? []),
      "positive",
    ],
  };
}

function validate(obj: any) {
  const objValidatorConfig = registeredValidators[obj.constructor.name];
  if (!objValidatorConfig) {
    return true;
  }
  let isValid = true;
  for (const prop in objValidatorConfig) {
    for (const validator of objValidatorConfig[prop]) {
      switch (validator) {
        case "required":
          isValid = isValid && !!obj[prop];
          break;
        case "positive":
          isValid = isValid && obj[prop] > 0;
          break;
      }
    }
  }
  return isValid;
}

class Course {
  @Required
  title: string;
  @PositiveNumber
  price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }
}

const courseForm = document.getElementById("form")! as HTMLFormElement;

courseForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = courseForm.courseName.value as string;
  const price = +courseForm.price.value;

  const createdCourse = new Course(title, price);
  if (!validate(createdCourse)) {
    alert("Entered data is invalid. Please try again!");
    return;
  }
  console.log(createdCourse);
});
