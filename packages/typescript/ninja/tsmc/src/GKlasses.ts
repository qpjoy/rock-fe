class DataCollection<T> {
  constructor(private data: T[]) {}

  loadOne(): T {
    const i = Math.floor(Math.random() * this.data.length);
    return this.data[i];
  }
  loadAll(): T[] {
    return this.data;
  }
  add(val: T): T[] {
    this.data.push(val);
    return this.data;
  }
}

interface Userner {
  name: string;
  score: number;
}
const userss = new DataCollection<Userner>([
  { name: "John", score: 100 },
  { name: "Jane", score: 200 },
  { name: "Joe", score: 300 },
]);
userss.add({ name: "Jim", score: 400 });
// const us = userss.loadOne();

// console.log('load one - '), users.loadOne();
console.log("load all - "), userss.loadAll();
