let age = 30;
// arrays
let names: string[] = ["Mario", "Luigi", "Peach"];
let ages: number[] = [25, 28, 24];

names.push("browser");
ages.push(35);

// type interface with arrays
let fruits = ["apples", "pears", "bananas", "mangos"];
fruits.push("peaches");

const f = fruits[3];

let things = [1, true, "hello"];

const t = things[0];

// object literals
let user: { firstName: string; age: number; id: number } = {
  firstName: "mario",
  age: 30,
  id: 1,
};

user.firstName = "peach";
user.id = 2;
// user.email = 'peach@netninja.dev';

let person = {
  name: "luigi",
  score: 35,
};

person.name = "browser";
person.score = 40;

const score = person.score;

// functions
function addTwoNumbers(a: number, b: number): number {
  return a + b;
}

const subtractTwoNumbers = (a: number, b: number): number => {
  return a - b;
};
addTwoNumbers(3, 9);
subtractTwoNumbers(10, 7);

function addAllNumbers(items: number[]): void {
  const total = items.reduce((a, c) => a + c, 0);
  console.log(total);
}

addAllNumbers([5, 7, 9, 11, 3, 2, 1]);

// return type interference

function formatGreeting(name: string, greeting: string): string {
  return `${greeting}, ${name}`;
}

const result = formatGreeting("mario", "hello");

// any type
let agee: any;
let title;

agee = 30;
agee = false;

title = 25;
title = {
  hello: "world",
};

let thingss: any[] = ["hello", true, 30, null];
thingss.push({ id: 123 });

function addTogether(value: any): any {
  return value + value;
}

const resultOne = addTogether("hello");
const resultTwo = addTogether(30);

// tuples
let personn: [string, number, boolean] = ["mario", 30, true];

let hsla: [number, string, string, number];
hsla = [200, "100%", "50%", 1];

let xy: [number, number];
xy = [94.7, 20.1];

function useCoords(): [number, number] {
  const lat = 100;
  const long = 50;
  return [lat, long];
}

const [lat, long] = useCoords();

// named tuples
let userr: [name: string, age: number];
userr = ["peach", 25];
console.log(userr[0]);

// interfaces
interface Author {
  name: string;
  avatar: string;
}

const authorOne: Author = {
  name: "mario",
  avatar: "/img/mario.png",
  //   age: 35,
};

interface Post {
  title: string;
  body: string;
  tags: string[];
  create_at: Date;
  author: Author;
}

const newPost: Post = {
  title: "my first post",
  body: "something interesting",
  tags: ["gaming", "tech"],
  create_at: new Date(),
  author: authorOne,
};

// as function argument types
function createPost(post: Post): void {
  console.log(`Created post ${post.title} by ${post.author.name}`);
}
createPost(newPost);

// with arrays
let posts: Post[] = [];
posts.push(newPost);

// type aliases
type Rgb = [number, number, number];
function getRandomColor(): Rgb {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return [r, g, b];
}

const colorOne = getRandomColor();
const colorTwo = getRandomColor();
console.log(colorOne, colorTwo);

type User = {
  name: string;
  score: number;
};
const userOne: User = {
  name: "mario",
  score: 75,
  // age: 45
};
function formatUser(user: User): void {
  console.log(`${user.name} has a score of ${user.score}`);
}

formatUser(userOne);
formatUser({
  name: "luigi",
  score: 50,
});

// union types
let someId: number | string = 22;
someId = "22";

let email: string | null = null;

email = "mario@netninja.dev";
email = null;

type Id = number | string;
let anotherId: Id;

anotherId = "1ksjdfsfl";
anotherId = 5;

// union type pitfall
function swapIdType(id: Id): Id {
  if (typeof id === "string") {
    // can use string methods
    return parseInt(id);
  } else {
    // can use number methods and properties
    return id.toString();
  }
  //   parseInt(id);
  //   return id;
}

const idOne = swapIdType(1);
const idTwo = swapIdType("2");

console.log(idOne, idTwo);

// tagged interface
interface TUser {
  type: "user";
  username: string;
  email: string;
  id: Id;
}
interface Person {
  type: "person";
  firstname: string;
  age: number;
  id: Id;
}

function logDetails(value: TUser | Person): void {
  if (value.type === "user") {
    console.log(`${value.username}'email is ${value.email}`);
  }
  if (value.type === "person") {
    console.log(value.firstname, value.age);
  }
}

// reusable interfaces
interface IHasQuantity {
  quantity: number;
}

const something: IHasQuantity = {
  quantity: 50,
  //   title: "hello",
};
function printQuantity(item: IHasQuantity): void {
  console.log(`the quantity of the item is ${item.quantity}`);
}
const fruit = {
  name: "mango",
  quantity: 50,
};
const vehicle = {
  type: "car",
  quantity: 3,
};
const personnn = {
  name: "mario",
  age: 30,
};

printQuantity(fruit);
printQuantity(vehicle);
// printQuantity(personnn);
// printQuantity({
//   type: "gg",
//   quantity: 123,
// });

// function signatures
type Calculator = (numOne: number, numTwo: number) => number;

function addTwoNumberss(a: number, b: number) {
  return a + b;
}
function multiplyTwoNumbers(first: number, second: number) {
  return first * second;
}
function squareNumber(num: number) {
  return num * num;
}
function joinTwoNumbers(numOne: number, numTwo: number) {
  return `${numOne}${numTwo}`;
}
let calcs: Calculator[] = [];
calcs.push(addTwoNumberss);
calcs.push(multiplyTwoNumbers);
// calcs.push(joinTwoNumbers);
calcs.push(squareNumber);

// function signatures on interfaces
interface HasArea {
  name: string;
  calcArea: (a: number) => number;
}

const shapeOne: HasArea = {
  name: "square",
  calcArea(l: number) {
    return l * l;
  },
};

const shapeTwo: HasArea = {
  name: "circle",
  calcArea(r: number) {
    return (Math.PI * r) ^ 2;
  },
};

shapeOne.calcArea(5);
shapeTwo.calcArea(10);

// extending interfaces
interface HasFormatter {
  format(): string;
}

interface Bill extends HasFormatter {
  id: string | number;
  amount: number;
  server: string;
}

const userrr = {
  id: 1,
  format(): string {
    return `This user has an id of ${this.id}`;
  },
};
const bill = {
  id: 2,
  amount: 50,
  server: "mario",
  format(): string {
    return `Bill with id ${this.id} has $${this.amount} to pay`;
  },
};

function printFormatted(val: HasFormatter): void {
  console.log(val.format());
}

function printBill(bill: Bill): void {
  console.log("server: ", bill.server);
  console.log(bill.format());
}

printFormatted(userrr);
printFormatted(bill);
// printBill(userrr)
printBill(bill);

// extending type aliases
type Personnn = {
  id: string | number;
  firstname: string;
};
type Userrrr = Personnn & {
  email: string;
};
const personOne: Personnn = {
  id: 1,
  firstname: "mario",
};
const personTwo: Userrrr = {
  id: "2",
  firstname: "yoshi",
  email: "yoshi@netninja.dev",
};
const personThree = {
  email: "peach@netninja.dev",
};

function printUser(user: Userrrr) {
  console.log(user.id, user.email, user.firstname);
}

// printUser(personOne);
printUser(personTwo);
// printUser(personThree);

// sets in typescript
const namess = new Set<string>();
namess.add("mario");
namess.add("peach");
console.log(namess);
// sets with custom types
interface Useer {
  email: string;
  score: number;
}
const u1: Useer = {
  email: "mario@netninja.dev",
  score: 10,
};
const u2: Useer = {
  email: "peach@netninja.dev",
  score: 20,
};

const userrrrs = new Set<Useer>();
userrrrs.add(u1);
userrrrs.add(u2);
userrrrs.add(u1);

// sets as function arguments
function logUserEmails(users: Set<Useer>): void {
  users.forEach((user) => {
    console.log(user.email);
  });
}
logUserEmails(userrrrs);

// enums
enum Priority {
  Lowest = 0,
  Low = 1,
  Medium = 2,
  High = 3,
  Urgent = 4,
}

function addTicket(details: string, priority: number) {
  if (priority === Priority.Lowest) {
  }
  if (priority === 1) {
  }
  if (priority === 2) {
  }
  if (priority === 3) {
  }
  if (priority === 4) {
  }
}
addTicket("fix computer", Priority.Urgent);
