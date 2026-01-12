{
  let hello: string = "Hello TypeScript";
  console.log(hello);

  let age: number = 20;
  console.log(age);
  if (age < 50) {
    age += 10;
  }
  console.log(age);
  let array: [number, string] = [1, "Roman"];
  array.push(1);
  console.log(array);
  const enum Size { small = "S", medium = "M", large = "L" }
  let mySize: Size = Size.medium;
  console.log(mySize);

  function calculateTax(income: number, taxYear = 2025) {
    if (taxYear < 2022)
      return income * 1.2;
    return income * 1.3;
  }
  console.log(calculateTax(10000, 2022));
  type Employee = {
    readonly id: number,
    name: string,
    phone?: number,
    retire: (date: Date) => void
  }
  let employee: Employee = {
    id: 1,
    name: "Tom",
    retire: (date: Date) => {
      console.log(date);
    }
  }
  console.log(employee);
  function kgToLbs(weight: number | string): number {
    if (typeof weight === "number")
      return weight * 2.2;
    else
      return parseInt(weight) * 2.2;
  }
  kgToLbs(10);
  kgToLbs("20kg");
  function greet(name: string | null | undefined) {
    if (name)
      console.log(`Welcome ${name.toUpperCase()}`);
    else
      console.log("Hola!");
  }
  function greetings(person: { name: string; age: number }) {
    if (person.age <= 18) {
      return "Hello junior, how was your day?"
    }
    return "Hello " + person.name + " would you like a cup of coffee?";
  }
  interface Person {
    name: string;
    age: number;
  }
  let office_worker: Person = {
    name: "Alex",
    age: 38
  }
  console.log(greetings(office_worker))
  console.log(greet("Roman"));
  type Customer = {
    birthday: Date;
  };
  function getCustomer(id: number): Customer | null {
    return id === 0 ? null : {
      birthday: new Date()
    }
  }
  let customer = getCustomer(1);
  console.log(customer?.birthday?.getFullYear());

  }
  
  
