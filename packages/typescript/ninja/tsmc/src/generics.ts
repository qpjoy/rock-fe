function logAndReturnString(val: string): string {
  console.log(val);
  return val;
}
function logAndReturnNumber(val: number): number {
  console.log(val);
  return val;
}

function logAndReturnBoolean(val: boolean): boolean {
  console.log(val);
  return val;
}

function logAndReturnValue<T>(val: T): T {
  console.log(val);
  return val;
}

// const result = logAndReturnNumber(5);
const resultOnee = logAndReturnValue<string>("mario");
const resultOneee = logAndReturnValue<number>(2);

function getRandomArrayValue<T>(values: T[]): T {
  const i = Math.floor(Math.random() * values.length);

  return values[i];
}

interface Userer {
  name: string;
  score: number;
}
const users: Userer[] = [
  { name: "mario", score: 100 },
  { name: "luigi", score: 200 },
  { name: "yoshi", score: 300 },
  { name: "peach", score: 400 },
  { name: "toad", score: 500 },
];

const randomUser = getRandomArrayValue<Userer>(users);
console.log(randomUser);
