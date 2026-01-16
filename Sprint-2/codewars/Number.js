var group = {
    A: 20, 
    B: 15, 
    C: 10
}

console.log(splitTheBill(group)) // returns {A: 5, B: 0, C: -5} 
function splitTheBill(group) {
    const names = Object.keys(group);
    const values = Object.values(group);

    const total = values.reduce((sum, n) => sum + n, 0);
    const average = total / names.length;
    const result = {};

    for (const name of names) {
        const balance = group[name] - average;
        result[name] = Number(balance.toFixed(2));
    }
    return result;
}
function converter(array) {
    return array.map(Number);
}
console.log(converter(["1.1", "2.2", "3.3"]))



// / Write a function that returns true if I can eat the ice cream
//  The function has 1 parameter representing an ice cream object
//  I can eat the ice cream if it is lactose-free and contains less than 10 grams of sugar
const iceCream1 = {
  flavour: "Vanilla",
  lactoseFree: false,
  gramsOfSugarPerScoop: 12,
};
const iceCream2 = {
  flavour: "Mango Sorbet",
  lactoseFree: true,
  gramsOfSugarPerScoop: 10,
};

const iceCream3 = {
  flavour: "Coconut",
  lactoseFree: true,
  gramsOfSugarPerScoop: 8,
};

const iceCream4 = {
  flavour: "Strawberry",
  lactoseFree: false,
  gramsOfSugarPerScoop: 8,
};
const iceCream5 = {
  flavour: "Lemon Sorbet",
  lactoseFree: true,
  gramsOfSugarPerScoop: 7,
};
const iceCreams = [iceCream1, iceCream2, iceCream3, iceCream4, iceCream5];


function canEat(iceCreams) {
  const canEatThis = {};

    for (const ice of iceCreams) {
        if (ice.lactoseFree && ice.gramsOfSugarPerScoop < 10) {
            canEatThis[ice.flavour] = 'I can eat this';
        }
    }
    return canEatThis;
}
console.log(canEat(iceCreams));


function couldEat(iceCream) {
    if (iceCream.lactoseFree && iceCream.gramsOfSugarPerScoop < 10)
        return true;
    return false;
}

console.log(couldEat(iceCream1)); // what should this output?
console.log(couldEat(iceCream2)); // what should this output?
console.log(couldEat(iceCream3)); // what should this output?
console.log(couldEat(iceCream4)); // what should this output?
console.log(couldEat(iceCream5)); // what should this output?


// Write a function called `getCheapest` that will take 2 book objects as parameters
//  and return the name of the cheaper book

const fictionBook = {
  title: "1984",
  author: "George Orwell",
  category: "Dystopian Fiction",
  subcategory: "Political",
  cost: 9.99,
};

const productivityBook = {
  title: "Atomic Habits",
  author: "James Clear",
  category: "Self-Help",
  subcategory: "Productivity",
  cost: 16.2,
};
function getCheapest(book1, book2) {
    if (book1.cost < book2.cost)
        return book1.title;
    return book2.title;

}
// this should output 1984
console.log(getCheapest(fictionBook, productivityBook));

const data = [
      {name: 'Joe', age: 20},
      {name: 'Bill', age: 30},
      {name: 'Kate', age: 23}
]
console.log(data.name);


function QueryString(url){
    let obj = {};
    const urlSplited = url.split("&");
    for(let i=0;i<urlSplited.length;i++){
    const key = urlSplited[i].slice(0,urlSplited[i].indexOf("="));
    const value = urlSplited[i].slice(urlSplited[i].indexOf("=")+1,urlSplited[i].length);
    Object.assign(obj, {[key]: value,});
    }
    
    return obj;
}

const url='colour=blue&sort=newest&date=new&country=turkey';
console.log(QueryString(url));