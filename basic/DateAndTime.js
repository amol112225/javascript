// Dates
let mydate = new Date()
console.log(mydate.toString())
console.log(mydate.toDateString())
console.log(mydate.toLocaleDateString())
console.log(mydate.toLocaleString())
console.log(mydate.getTime())
console.log(typeof(mydate)) // object

let currentDate = Date.now()
console.log(currentDate.toString())


let newDate = new Date()
console.log(newDate.getDate())
console.log(newDate.getDay())
console.log(newDate.getMonth())

console.log(newDate.toLocaleString('default',{
    weekday:"short",
    formatMatcher:"best fit",
    
}))

