import { CSVWriter } from "./CSVWriter";

interface Payment {
  id: number;
  amount: number;
  to: string;
  notes: string;
}

const paymentWriter = new CSVWriter<Payment>(["id", "amount", "to", "notes"]);
paymentWriter.addRows([
  { id: 1, amount: 50, to: "mario", notes: "webdev" },
  { id: 2, amount: 100, to: "luigi", notes: "webdev" },
]);

paymentWriter.save("./data/payments.csv");
