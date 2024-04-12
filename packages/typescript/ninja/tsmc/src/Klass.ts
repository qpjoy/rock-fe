type Base = "classic" | "thick" | "thin" | "garlic";

interface HasFormatter {
  format(): string;
}

class MenuItem implements HasFormatter {
  constructor(private title: string, private price: number) {}
  get details(): string {
    return `${this.title} - $${this.price}`;
  }
  format() {
    return `This menu item is called ${this.title} and is $${this.price}`;
  }
}

class Pizza extends MenuItem {
  constructor(title: string, price: number) {
    super(title, price);
  }
  private base: Base = "classic";
  private toppings: string[] = [];

  addTopping(topping: string): void {
    this.toppings.push(topping);
  }
  removeTopping(topping: string): void {
    this.toppings = this.toppings.filter((t) => t !== topping);
  }
  selectBase(b: Base): void {
    this.base = b;
  }
}

const pizzaOne = new Pizza("mario special", 15);
const pizzaTwo = new Pizza("luigi", 10);
// pizza.selectBase("garlic");
// pizza.addTopping("mushrooms");
// pizza.addTopping("olives");

function addMushroomsToPizzas(pizzas: Pizza[]): void {
  for (const p of pizzas) {
    p.addTopping("mushrooms");
  }
}

addMushroomsToPizzas([pizzaOne, pizzaTwo]);
console.log(pizzaOne, pizzaTwo);
// pizzaOne.details;
function printMenuItem(item: MenuItem): void {
  console.log(item.details);
}

printMenuItem(pizzaOne);
function printFormatted(val: HasFormatter): void {
  console.log(val.format());
}

printFormatted(pizzaOne);
