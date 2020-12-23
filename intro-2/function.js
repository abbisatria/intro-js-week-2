const addition = (number1, number2) => {
 const result = number1 * number2

 printResult(result)
}

const substraction = (number1, number2) => {
 const result = number1 - number2

 printResult(result)
}

const printResult = (result) => {
 return console.log(`Hasilnya adalah ${result}`)
}

addition(3,10)
substraction(10, 7)

const object = {
 function1: function (result) {
  return console.log(result)
 },
 function2: function () {
  someWord = 'Hello Arkademy!'
  this.function1(someWord)
 }
}

object.function2()