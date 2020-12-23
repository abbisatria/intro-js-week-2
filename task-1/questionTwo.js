const mathematics = 80
const indonesiaLanguage = 90
const englishLanguage = 89
const science = 69

if (typeof(mathematics) === 'number' && typeof(indonesiaLanguage) === 'number' && typeof(englishLanguage) === 'number' && typeof(science) === 'number') {
 if (mathematics > 0 && mathematics <= 100 && indonesiaLanguage > 0 && indonesiaLanguage <= 100 && englishLanguage > 0 && englishLanguage <= 100 && science > 0 && science <= 100) {
  const average = (mathematics + indonesiaLanguage + englishLanguage + science) / 4
  if (average >= 90) {
   console.log(`Average = ${average} Grade = A`)
  } else if (average >= 80) {
   console.log(`Average = ${average} Grade = B`)
  } else if (average >= 70) {
   console.log(`Average = ${average} Grade = C`)
  } else if (average >= 60) {
   console.log(`Average = ${average} Grade = D`)
  } else {
   console.log(`Average = ${average} Grade = E`)
  }
 } else {
  console.log('data must be 1 to 100')
 }
} else {
 console.log('data must be a number')
}