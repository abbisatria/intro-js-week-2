function divideAndSort(numbers) {
 let array = numbers.toString().split('0')
 let sort = array.map((num) => num.split('').sort().join('')).join('')
 let stringToNumber = parseInt(sort)
 console.log(stringToNumber)
}
divideAndSort(5956560159466056)