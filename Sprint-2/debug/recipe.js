// Predict and explain first...
// The last part of the statement in the console.log is incorrect because it should be recipe.ingredients
// This way it will try to print the whole object.

// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

console.log(`${recipe.title} serves ${recipe.serves}
  ingredients:
  ${recipe.ingredients}`);  