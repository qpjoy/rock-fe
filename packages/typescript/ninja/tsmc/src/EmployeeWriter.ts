import { CSVWriter } from "./CSVWriter";
interface Employee {
  id: number;
  name: string;
  role: string;
  salary: number;
}

const employeeWriter = new CSVWriter<Employee>([
  "id",
  "name",
  "role",
  "salary",
]);
employeeWriter.addRows([
  { id: 1, name: "John", role: "Developer", salary: 50000 },
  { id: 2, name: "Jane", role: "Designer", salary: 60000 },
  { id: 3, name: "Jim", role: "Manager", salary: 70000 },
]);

employeeWriter.save("data/employees.csv");
employeeWriter.addRows([
  { id: 4, name: "Jill", role: "Tester", salary: 40000 },
  { id: 5, name: "Jack", role: "Analyst", salary: 55000 },
]);
