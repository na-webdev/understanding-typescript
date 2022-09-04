// Code goes here!
class Department {
  // private readonly id: string;
  // private name: string;
  private employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // this.name = name;
    // this.id = id;
  }

  describe(this: Department) {
    console.log(`Department ${this.id}: ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees);
  }
}

class ItDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
}
class AccountingDepartment extends Department {
  constructor(id: string, private readonly reports: string[]) {
    super(id, "Accounting");
    this.reports = reports;
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports);
  }
}

const itDepartment = new ItDepartment("d1", ["Max"]);
const accountingDepartment = new AccountingDepartment("d1", [
  "Balance reports",
]);

console.log(accountingDepartment.name);

accountingDepartment.describe();

accountingDepartment.addEmployee("Max");
accountingDepartment.printEmployeeInformation();

// const accountingCopy = {
//   name: "Fake accounting",
//   describe: accountingDepartment.describe,
// };

// accountingCopy.describe();
