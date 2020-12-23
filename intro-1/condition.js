const condition = 'Arkademy'

// If-Else
if (condition !== 'Arkademy') {
 console.log('This variable is not Arkademy')
} else {
 console.log('This is Arkademy')
}

// Ternary <condition> ? <true> : <false>
condition !== 'Arkademy' ? console.log('This variable is not Arkademy') : console.log('This is Arkademy')

let num = 6
if (num%2 == 0) {
 console.log(`${num} is Even`)
} else {
 console.log(`${num} is Odd`)
}

const conditionSwitch = 1

// Switch
switch (conditionSwitch) {
 case 1:
  console.log('First condition')
  break;
 case 2:
  console.log('Second condition')
  break;
 case 3:
  console.log('Third condition')
  break;
 default:
  console.log('Default condition')
  break;
}