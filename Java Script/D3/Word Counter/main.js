var sentence = window.prompt("Enter a sentence:");
let words = sentence.trim().split(" ");
console.log("Total words:", words.length);
words.forEach(word => {
  console.log(word + " => " + word.length + " letters");
});
