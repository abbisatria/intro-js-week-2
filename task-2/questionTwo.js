const name = [
 'Abigail', 'Alexandra', 'Alison',
 'Amanda', 'Angela', 'Bella',
 'Carol', 'Caroline', 'Carolyn',
 'Deirdre', 'Diana', 'Elizabeth',
 'Ella', 'Faith', 'Olivia', 'Penelope'] 

function searchName(search, max, callback) {
 const searchData = name.filter(data => data.toLowerCase().includes(search)
 )
 const maxData = searchData.slice(0, max)
 callback(maxData)
}

function showName(result) {
 console.log(result)
}

searchName('an', 3, showName)