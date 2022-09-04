interface Person {
    firstName: string;
    lastName: string;
    age: number;
    get fullName(): string
}

type Human = {
    firstName: string;
    lastName: string;
    age: number;
    get fullName(): string
}

class Individual implements Human {
    constructor(public firstName: string, public lastName: string, public age: number) {
    }

    get fullName() {
        return this.firstName + " " + this.lastName
    }
}

const user: Person = {
    firstName: 'Abdurrahim',
    lastName: 'Nurmatov',
    age: 24,
    get fullName(): string {
        return `${this.firstName} ${this.lastName}`
    }
}

console.log(user.fullName)
