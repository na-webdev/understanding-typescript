type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// interface ElevatedEmployee extends Employee, Admin {}

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "max",
  privileges: ["create-server"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function add(n1: number, n2: number): number;
function add(n1: string, n2: string): string;
function add(n1: string, n2: number): string;
function add(n1: number, n2: string): string;
function add(n1: Combinable, n2: Combinable) {
  if (typeof n1 === "string" || typeof n2 === "string") {
    return n1.toString() + n2.toString();
  }
  return n1 + n2;
}

const result = add('2', 2);
result.split('');

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log("Name: " + emp.name);
  if ("privileges" in emp) {
    console.log("Privileges: " + emp.privileges);
  }
}

printEmployeeInformation({ name: "John", privileges: ["do it now"] });

class Car {
  drive() {
    console.log("Driving...");
  }
}

class Truck {
  drive() {
    console.log("Driving...");
  }

  loadCargo() {
    console.log("Loading cargo...");
  }
}

type Vehicle = Car | Truck;

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo();
  }
}

useVehicle(new Car());
useVehicle(new Truck());

interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed: number;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
      break;
  }

  console.log("Animal is moving at speed of " + speed);
}

moveAnimal({ type: "bird", flyingSpeed: 12 });

const userInput = document.getElementById("user-input") as HTMLInputElement;

userInput.value = "Enter some value";

interface ErrorContainer {
  [prop: string]: string;
}

const ErrorBag: ErrorContainer = {
  name: 'invalid name',
  email: 'invalid email',
}
