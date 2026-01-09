
const arr=[2,3,1,4,5,9,8]

// for(let i = 0; i<arr.length; i++){
//     const element = arr[i];
//     console.log(element);
// }

// table in basic format
// console.log("Table of 1 : ");

// for(let i=1; i <= 10; i++){
//     for(let j=1; j<=10; j++){
//         console.log(`${i}*${j} = `,i*j);
//     }
//     console.log(`Table of ${i+1} : `);
// }
// break and continue same as in C++
for(let i=1; i <= 10; i++){
    for(let j=1; j<=10; j++){
        console.log(`value of i is ${i} and value of j is ${j}`);
        if(i==2) break; // only inner loop will break
    }
}