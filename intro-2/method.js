const dataString = ['BMW', 'Yamaha', 'Honda', 'Ducati', 'Suzuki']

const dataNumber = [1, 5, 20, 19, 37, 100, 4, 3, 2]

const dataSort = dataString.sort()
const dataNumberSort = dataNumber.sort((min, max) => min - max)

// console.log(dataSort)
// console.log(dataNumberSort)

for (let index = 0; index < dataString.length; index++) {
 console.log(dataString[index])
}

dataSort.map((item, index) => {
 console.log(`${index}. Merk ${item}`)
})