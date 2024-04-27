// let total: number = 100;
// let name: string = "Bob";
// let isActive: boolean = false;
// let empty: null = null;
// let undf: undefined = undefined;
// let age = 10;
// const numbers: number[] = [1, 2, 4, 5, 6, 0];

// // const user: { name: string; age: number } = {
// //   name: "Bob",
// //   age: 12,
// // };

// type User = {
//   name: string;
//   age: number | string;
// };

// const user: User = {
//   name: "Bob",
//   age: 12,
// };

// user.age = "15";
// // user.name = 1;

// type eventType = "lesson" | "deadline";

// const event: eventType = "deadline";

// let age: any = 10;
// age = "Bob";
// age = false;

// let name: unknown = "Bob";
// name = 12;
// name.toFixed();

// type size = "small" | "medium" | "large";

// enum Sizes {
//   small = "small",
//   medium = "medium",
//   large = "large",
// }

// const button: size = "large"
// const button2: Sizes = Sizes.large

// function add(num1: number, num2: number): string {
//   return `${num1}` + `${num2}`;
// }

// console.log(add(2, 3));

// function add(num1: number, num2: number): void {
//   console.log(num1 + num2);
// }

// add(2, 3);

// type User = {
//   name: string;
// };

// function great(user: User): void {
//   console.log(`Hello ${user.name}`);
// }

// type User = {
//   name: string;
//   age: number;
//   hobby: string;
// };

// function userConstructor(name: string, age: number, hobby: string): User {
//   return { name, age, hobby };
// }

// type Car = {
//   color: string;
//   price: number;
//   currency: string;
//   start: (color: string) => {};
// };

// const Car = {
//   color: "red",
//   price: 1000,
//   currency: "UAH",
//   start: function (color) {
//     console.log("Start" + this.color);
//   },
// };

type User = {
  name: string;
  age: number;
  role?: string;
};

const user: User = {
  name: "Bob",
  age: 12,
};

const admin: User = {
  name: "John",
  age: 23,
  role: "Admin",
};

type MyType = { [key: string]: number };

let obj: MyType = {
  one: 1,
  two: 2,
};
