var name = window.prompt("Enter your name:");
var age = Number(window.prompt("Enter your age:")); 
var category = "";

if (age < 25) {
  category = "Young";
} else if (age <= 40) {
  category = "Middle";
} else {
  category = "Old";
}
console.log("User:", { name: name, age: age, category: category });
alert("Hello " + name + "! You are in the '" + category + "' age group.");
