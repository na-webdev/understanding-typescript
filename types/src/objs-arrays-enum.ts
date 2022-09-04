// const person: {
//   name: string;
//   age: number;
// }
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "John",
//   age: 23,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, "author"],
// };

enum Role {
  ADMIN,
  AUTHOR,
  READ_ONLY,
}

const person = {
  name: "John",
  age: 23,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};

// person.role.push("admin");
// person.role[1] = 0;

let favouriteActivities: string[];
favouriteActivities = ["Do it now"];

console.log(person.age);

for (let hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
