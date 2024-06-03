// const cart = [
//   { name: "Apple", price: 0.5, quantity: 4 },
//   { name: "Banana", price: 0.25, quantity: 6 },
// ];

// const newItems = [
//   { name: "Cherry", price: 0.75, quantity: 5 },
//   { name: "Date", price: 1, quantity: 3 },
// ];

// var total = 0;
// const items = [...cart, ...newItems];
// // const { price, quantity } = item;
// for (const { price, quantity } of items) {
//   //   const { price, quantity }
//   total += price * quantity;
//   //   console.log(price, quantity);
// }
// console.log("The cart Total is: ", total);

// Task 6
let sentence = "Hello world from JavaScript";
const transformSentence = (sentence) =>
  sentence.toUpperCase().split(" ").reverse().join(" ");

// let transformed = sentence.toUpperCase().split(" ");
// let reversed = transformed.reverse().join();
let transformed = transformSentence(sentence);
console.log(transformed); // Output: "JAVASCRIPT FROM WORLD HELLO"
