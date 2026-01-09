let name="Amol"
console.log(name[2])

let clgname=new String("PICT")
console.log(name.__proto__);

console.log(name.toUpperCase());
console.log(name.length)

console.log(name.charAt(2));
console.log(name.indexOf('A'));

let newstring = name.substring(0,2) 
console.log(newstring) // "Am"

let anotherstring = name.slice(-2)
console.log(anotherstring); // "lo"

let collagname="  P I CT  "
console.log(collagname)
console.log(collagname.trim()) // remove extra spaces only from right and left(P I CT)

const url = "https://amol.com/amol%20kendre"
console.log(url);
console.log(url.replace('%20','_'))

// split
const str = "The quick brown fox jumps over the lazy dog.";

const words = str.split(" ");
console.log(words[3]);
// Expected output: "fox"

const chars = str.split("");
console.log(chars[8]);
// Expected output: "k"

const strCopy = str.split();
console.log(strCopy);
// Expected output: Array ["The quick brown fox jumps over the lazy dog."]