interface HasId {
  id: number;
}

class DataCollectionn<T extends HasId> {
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
  deleteOne(id: number): void {
    this.data = this.data.filter((item: T) => item.id !== id);
  }
}
