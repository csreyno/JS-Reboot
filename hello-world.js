// const whom = 'gobble gobble';

function helloLiz() {
    console.log('hello liz');
}

function helloTurkey() {
    console.log('hello turkey');
}

//variable whom is defined locally here in the function (vs globally);
function hey() {
    const whom = 'gobble gobble';
}

//change the below to be rewritten
// function helloWhom(person) {
//     console.log(`Hello ${person}`);
// }

//arrow function - 
//1. rewrite as a const variable
//2. on the RHS, copy/paste the function
//3. delete the name fromt he RHS of the assignment
// const helloWhom = function (person) {
//     console.log(`Hello ${person}`);
// }

//Fn expression as an arrow Fn
//1. copy/paste your Fn expression as var
//2. deletet he word Fn from RHS
//3. put an arrow after the parenthesis
const helloWhom = (person)=> {
    console.log(`Hello ${person}`);
}

helloWhom("bob");

helloLiz();
helloTurkey();
