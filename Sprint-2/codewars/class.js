
let myName = "Nico"; // variable
const myAge = 18;

const bankAccounts = [
  {
    nameOfBank: "bank Name",
    iban: 12345,
    bic: 678,
  },
  {
    nameOfBank: "my second one",
    iban: 934895,
    bic: "i don't know",
  },
];

let person = {
  fistName: "Nico",
  middleName: null,
  lastName: "Stuhlfauth",
  secondLastName: null,
  age: 18,
  bankAccounts,
};


function printName(person) {
    yourfirstName = person.fistName;
    yourlastName = person.lastName;
    if (person.middleName != null) {
        const yourfirstName = yourfirstName + person.middleName;
    }
    
    if (person.middleName != null) {
        const yourlastName = `${person.lastName} + ${person.secondLastName}`;
    }
         
    return console.log(`${yourfirstName} ${yourlastName}`)

}
printName(person);

function addbankAccount(person, newAccount) { }

const Account= {
    nameOfBank: "bank Name",
    iban: 12345,
    bic: 678,
}

/**
 * Customers
 *
 * name
 * birthDate
 * addresses
 *, invoice, deliveries (multiple)
 * credit cards
 * permission group: finance
 */

function fetchCustomers() {
  const address = {
    street: "Empty Street",
    houseNumber: 5,
    zip: 12345,
    city: "Barcelona",
    country: "ES",
  };
  const customers = [
    {
      name: "Nico",
      birthDate: new Date(),
      addresses: [address, address],
      creditCards: [],
    },
    {
      name: "John",
      birthDate: new Date(),
      addresses: [address, address],
      creditCards: [],
    },
    {
      name: "Katie",
      birthDate: new Date(),
      addresses: [address, address],
      creditCards: [],
    },
  ];

  return customers;
}

const fetchedCustomers = fetchCustomers();

function addCreditCard(person, newCreditCard) {
  const { ccNumber, expiryDate, cvv, cardHolder } = newCreditCard;
  // check if its valid

  const isValid = true;
  const personWithCreditCard = {
    ...person, creditCards: isValid
      ? [...person.creditCards, newCreditCard]
      : person.creditCards,

  };

  console.log(personWithCreditCard);

  return {};
}

// we want to update john

const johnPerson = fetchedCustomers.find(
  (customer) => customer.name === "John",
);

// still contains bug, returns 1 instead of the object
addCreditCard(johnPerson, {
  ccNumber: 12345,
  expiryDate: new Date(),
  cvv: 123,
  cardHolder: "John",
});

  