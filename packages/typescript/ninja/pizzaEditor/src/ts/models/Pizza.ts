import { DataResource } from "../services/DataResource";

export interface PizzaProps {
  title: string;
  description: string;
  toppings: string[];
  price: number;
}

export const Pizza = new DataResource<PizzaProps>(
  "http://localhost:3000/pizzas"
);

// Pizza.save({
//   title: "Pizza 1",
//   description: "Pizza 1 description",
//   toppings: ["mushrooms", "peppers", "olives"],
//   price: 10,
// });
