const printTriangle = 5

if (typeof(printTriangle) === 'number') {
 let newTriangle = ''
 for (let i = printTriangle; i >= 1; i--) {
  for (let j = 1; j <= i; j++) {
   newTriangle += j
  }
  newTriangle += '\n'
 }
 console.log(newTriangle)
} else {
 console.log('data must be a number')
}