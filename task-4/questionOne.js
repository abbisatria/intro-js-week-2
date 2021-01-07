// 1.
// const teks = "Malam";
// if(typeof (teks) === 'string' && teks.length > 0) {
//  let lowerCase = teks.toLowerCase();
//  let newTeks = "";
//  for(let index = lowerCase.length - 1; index >= 0; index--){
//   newTeks += lowerCase[index];
//  }
//  if(newTeks === lowerCase) {
//   console.log("palindrom");
//  } else {
//   console.log("bukan palindrom")
//  }
// } else {
//  console.log("data harus berupa string dan memiliki panjang string lebih dari 0")
// }

// 1.
// const text = "Malam";
// if(typeof (text) === 'string' && text.length > 0) {
//  let lowerCase = text.toLowerCase();
//  let newText = lowerCase.split("").reverse().join("");
//  if(newText === lowerCase) {
//   console.log("palindrom");
//  } else {
//   console.log("bukan palindrom");
//  }
// } else {
//  console.log("data harus berupa string dan memiliki panjang string lebih dari 0");
// }

// 2.
// const sentence = "Saya belajar Javascript";

// if(typeof (sentence) === 'string') {
//  let array = sentence.split(" ");
//  let newArray = "";
//  for(let index = array.length - 1; index >= 0; index--){
//   newArray += array[index] + " ";
//   slice = newArray.slice(0, newArray.length - 1);
//  }
//  console.log(slice);
// } else {
//  console.log("data harus berupa string")
// }

// 2.
// const independentClause = "Saya Belajar Javascript"
// if(typeof (independentClause) === 'string') {
//  console.log(independentClause.split(" ").reverse().join(" "))
// } else {
//  console.log("data harus berupa string")
// }