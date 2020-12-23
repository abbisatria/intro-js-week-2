function valueSelection(firstValue, lastValue, dataArray) {
 if (firstValue < lastValue) {
  if (dataArray.length > 5) {
   let selection = dataArray.filter(data => {
    return data > firstValue && data < lastValue
   })
   const selectionSort = selection.sort((min, max) => min - max)
   return selectionSort
  } else {
   return 'The number of numbers in the dataArray must be more than 5'
  }
 } else {
  return 'The final grade must be greater than the initial value'
 }
}

console.log(valueSelection(5, 20, [2, 25, 4, 14, 17, 30, 8]))