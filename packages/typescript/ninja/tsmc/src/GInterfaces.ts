interface Collection<T> {
  data: T[];
  name: string;
}

const collectionOne: Collection<string> = {
  data: ["a", "b", "c"],
  name: "collectionOne",
};

const collectionTwo: Collection<number> = {
  data: [1, 2, 3],
  name: "collectionTwo",
};

function randomCollectionItem<T>(c: Collection<T>): T {
  const i = Math.floor(Math.random() * c.data.length);
  return c.data[i];
}

const resultOne1 = randomCollectionItem<string>(collectionOne);
const resultTwo2 = randomCollectionItem<number>(collectionTwo);
console.log(resultOne1, resultTwo2);
