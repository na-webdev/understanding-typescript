// Code goes here!
class Department {
  name: string;

  constructor(departmentName: string) {
    this.name = departmentName;
  }

  describe(this: Department) {
    console.log("Department: " + this.name);
  }
}

const accountingDepartment = new Department("Accounting");

console.log(accountingDepartment.name);
accountingDepartment.describe();

const accountingCopy = {
  name: "Fake accounting",
  describe: accountingDepartment.describe,
};

accountingCopy.describe();
