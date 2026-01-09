// const arr = [1,2,3,4,5]

// for (const element of arr) {
//     console.log(element);
// }

// let greetings = "Hello World!"
// for(const greet of greetings){
//     console.log(greet);
    
// }
 // Map
// const map = new Map();
// map.set('IN',"India")
// map.set('USA',"United state of America")
// map.set('Fr',"France")
// console.log(map)
// for(const [key,value] of map){
//     console.log(key,":-",value);
// }


// for object for of is not used we use for in 
// const obj = {
//     js:"javascript",
//     cpp:"C++",
//     rb:"ruby",
//     swift:"swift by apple"
// }
// for (const key in obj) {
//     console.log(key, " :- ",obj[key]);
    
// }


// for each
const arr = ["python","java","ruby","cpp", "javascript"]

// arr.forEach(function (item){
//     console.log(item);
    
// })

// same using arrow function

// arr.forEach((item) =>{
//     console.log(item);
    
// })

// arr.forEach((item,index,arr) =>{
//     console.log(item,index,arr);
    
// })


// access object elements from array
const mycoding = [
    {
        languageName:"Python",
        languageFileName:"py"
    },
    {
        languageName:"C++",
        languageFileName:"cpp"
    },
    {
        languageName:"javascript",
        languageFileName:"js"
    }
]
// mycoding.forEach((item)=>{
//     console.log(item.languageName,item.languageFileName);
    
// })

// filter
const nums = [1,2,3,4,5,6,7,8,9,10]

let newnum = nums.filter((num)=>num>=5);
// console.log(newnum);

const books = [
    {
        title:"Book one", genre:"History", publish:1986,edition:1996
    },
    {
        title:"Book two", genre:"Science", publish:1976,edition:2005
    },
    {
        title:"Book three", genre:"Maths", publish:1982,edition:2006
    },
    {
        title:"Book four", genre:"Non-Fiction", publish:1989,edition:2001
    },
    {
        title:"Book five", genre:"History", publish:1886,edition:2009
    },
    {
        title:"Book six", genre:"Maths", publish:1998,edition:2008
    },
    {
        title:"Book seven", genre:"Non-Fiction", publish:1909,edition:2002
    },
    {
        title:"Book engiht", genre:"History", publish:1956,edition:2005
    },
    {
        title:"Book nine", genre:"Science", publish:1936,edition:2004
    },
    {
        title:"Book ten", genre:"History", publish:1966,edition:2001
    }
]
const userrbook = books.filter((bk) => bk.edition>2004 && bk.genre=="Maths")
// console.log(userrbook);


// map
const numarray = [1,2,3,4,5,6,7,8,9,10]
// const narray = numarray.map((num) => num*10)
const narray = numarray.map((num) => num*10).map((num)=>num+1).filter((num)=>num<60)
// console.log(narray);

// reduce
const array = [1, 2, 3, 4];
const initialValue = 0;
const sumWithInitial = array.reduce(
  (accumulator, currentValue) => accumulator + currentValue, initialValue // it will calculate sum of array

);

console.log(sumWithInitial);//10

