/*
-hello to an array of names 
    -for () loops
    -for of loops
    .forEach()

- hello to name longer than 5 letters
    - .filter()

-hello to a name if it's in the array, otherwise "hello world"
    - .find
*/

const names = [
    'alice',
    'bob',
    'charles',
    'dom',
    'elle'
];

// for (let i=0; i<names.length; i++) {
//     const oneName = names[i];
//     console.log(`${i}: ${oneName})
// }

// for (let b=99; b>0; b--)    {
//     console.log(`${b} bottles of beer`);
// }

// for (let oneName of names) {
//     console.log(`Hello ${oneName}`)
//     console.log(`goodbye ${oneName}`)
// }

const hello = (whom) =>console.log(`Hello ${whom}`);
const bye = (whom) => console.log(`Bye ${whom}`);

// names.forEach(hello);

// const combo = (n) => {
//     hello(n);
//     bye(n);
// };

//callback pattern
// names.forEach((n) => {
//     hello(n);
//     bye(n);
// })

// //the above is the same as this
// names.forEach(combo)

//demo of .filter
// const isNameLong = (n) =>{
//     return n.length >4;
// }
// //the below is the same as above due to various implicit returns
//     if(n.length > 4) {
//         return true;    
//     } else {
//         return false;
//     }
// }

//arrow function using implicit return; this does the same as the lines above (56-58) and (60-64)
const isNameLong = (n) => n.length >4;


//very short version, removes 'isNameLong' variable completely
//const longNames3 = names.filter((n) => n.length > 4);

const longNames = names.filter(isNameLong);
console.log(longNames);

let longNames2 = [];
for (let n of names) {
    if (isNameLong(n)) {
        longNames2.push(n);
    }
}

console.log(longNames2);

//implementation of our own .filter
const myFilter = (arr, callback) => {
    let newArray = [];

    for (let n of arr) {
        if (callback(n)) {
            newArray.push(n);
        }
    }
    return newArray;
};

//const longNames = names.filter(isNameLong)
const longNames4 = myFilter(names, isNameLong);
console.log(longNames4);