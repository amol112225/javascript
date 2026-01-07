// //let arr = new Array(2,3,1,3,5,7,9,0)
let arr = [2,3,1,3,5,7,9,0]
// console.log(arr[2]); // 1
// arr.push(5) // push at the end 
// console.log(arr)
// arr.pop() // last element will be remove
// console.log(arr)
// arr.unshift(6) // push at start
// console.log(arr)
// arr.shift() // delete element from start
// console.log(arr)

// console.log(arr.includes(12)); // it check is 12 in arra or not (true or false)


// console.log(arr.indexOf(3)); // it gives first occurance index of arra element (here 3)
 
// const newarr = arr.join() // dds all the elements of an array into a string, separated by the specified separator string.
// console.log(arr);
// console.log(newarr);
// console.log(typeof arr);
// console.log(typeof newarr);
// console.log("original array : ",arr)
// let arr1 = arr.slice(1,3)
// console.log("array after slice : ",arr)
// console.log(arr1)
// let arr2 = arr.splice(1,3)
// console.log("array after splice : ",arr)
// console.log(arr2)


const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]
// marvel_heros.push(dc_heros)
// let all_heros = marvel_heros.concat(dc_heros)
// console.log(marvel_heros+dc_heros)

// spread two arrays using ...
const all_new_heros = [...marvel_heros,...dc_heros]
// console.log(all_new_heros)

/*
flat 
Returns a new array with all sub-array elements
concatenated into it recursively up to the specified depth.
 */
// const another_array = [1,2,4,[3,5,32],34,[5,23,12,34,[34,21,32,43,[5,65,33,2,45]]]]
// console.log(another_array)
// const real_array = another_array.flat(Infinity)
// console.log("after aplying flat real array : ",real_array)

// to check is arrya or not 
console.log(Array.isArray("Amol")) // False
// To convert in array
console.log(Array.from("Amol"))
console.log(Array.from({name:"Amol"})) // empty array

// to convert these seperate elements into array

a=10
b=23
c=34
d=45
let numarray = Array.of(a,b,c,d)
console.log(numarray)
