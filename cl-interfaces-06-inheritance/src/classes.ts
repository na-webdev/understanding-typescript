abstract class Department {
  // private readonly id: string;
  // private name: string;
  private employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
  }

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    // validation etc
    // this.id = 'd2';
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }

  describe() {
    console.log(this.name, this.admins)
  }
}

class AccountingDepartment extends Department {
  static fiscalYear = 2022;
  private static instance: AccountingDepartment;
  private constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
  }

  get mostRecentReport() {
    if (this.reports.length === 0) throw new Error('No report found');
    return this.reports[this.reports.length - 1];
  }

  set mostRecentReport(value:string) {
    if (!value) throw new Error('Please, pass in a valid value!');
    this.addReport(value);
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports);
  }

  describe() {
    console.log(this.name, this.reports)
  }

  static getInstance() {
    if (AccountingDepartment.instance) {
      return this.instance
    }
    this.instance = new AccountingDepartment('d2', ['Cash flow']);
    return this.instance
  }

}

const it = new ITDepartment('d1', ['Max']);

it.addEmployee('Max');
it.addEmployee('Manu');

// it.employees[2] = 'Anna';

it.describe();
it.name = 'NEW NAME';
it.printEmployeeInformation();

console.log(it);

const accounting = AccountingDepartment.getInstance();
const fakeAccounting = AccountingDepartment.getInstance();

console.log(accounting);
console.log(fakeAccounting)

accounting.mostRecentReport = 'Financial Report';
console.log(accounting.mostRecentReport);
accounting.addReport('Something went wrong...');
accounting.describe()

accounting.printReports();

// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };

// accountingCopy.describe();
