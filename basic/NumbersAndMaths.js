let number = 100.8999
console.log(number)
let anothernumber = new Number(100)
console.log(anothernumber)

// Number to string conversion
console.log(number.toString())
console.log(number.toFixed(2))  // only two decimal points 100.89
//The toPrecision() method of Number values returns a string 
// representing this number to the specified number of significant digits.
console.log(number.toPrecision(4))

const hundreds = 100000000;
console.log(hundreds.toLocaleString('en-IN')) // 10,00,00,000


//**************MATHS**************** */
console.log(Math)
console.log(Math.abs(-244)); // convert -ve to +ve
console.log(Math.round(4.8211)) // round off (5)
console.log(Math.floor(2.99)); //previous number (2)
console.log(Math.ceil(5.10)); // next number (6)

console.log(Math.random()) // random value between 0 and 1

let min=10
let max=20
console.log(Math.floor((Math.random()*(max-min+1) + min)))
