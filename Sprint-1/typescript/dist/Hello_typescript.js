"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
{
    let hello = "Hello TypeScript";
    console.log(hello);
    let age = 20;
    console.log(age);
    if (age < 50) {
        age += 10;
    }
    console.log(age);
    let array = [1, "Roman"];
    array.push(1);
    console.log(array);
    let Size;
    (function (Size) {
        Size["small"] = "S";
        Size["medium"] = "M";
        Size["large"] = "L";
    })(Size || (Size = {}));
    let mySize = Size.medium;
    console.log(mySize);
    function calculateTax(income, taxYear = 2025) {
        if (taxYear < 2022)
            return income * 1.2;
        return income * 1.3;
    }
    console.log(calculateTax(10000, 2022));
    let employee = {
        id: 1,
        name: "Tom",
        retire: (date) => {
            console.log(date);
        }
    };
    console.log(employee);
    function kgToLbs(weight) {
        if (typeof weight === "number")
            return weight * 2.2;
        else
            return parseInt(weight) * 2.2;
    }
    kgToLbs(10);
    kgToLbs("20kg");
    function greet(name) {
        if (name)
            console.log(`Welcome ${name.toUpperCase()}`);
        else
            console.log("Hola!");
    }
    function greetings(person) {
        if (person.age <= 18) {
            return "Hello junior, how was your day?";
        }
        return "Hello " + person.name + " would you like a cup of coffee?";
    }
    let office_workers = {
        name: "Alex",
        age: 38
    };
    console.log(greetings(office_workers));
    console.log(greet("Roman"));
    function getCustomer(id) {
        return id === 0 ? null : {
            birthday: new Date()
        };
    }
    let customer = getCustomer(1);
    console.log(customer?.birthday?.getFullYear());
}
//# sourceMappingURL=Hello_typescript.js.map