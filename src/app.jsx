// let counter = 0;

// function addCounter() {
//     counter += 1
// }

// console.log('initial counter is ', counter);

// addCounter();

// console.log('counter after adding one ', counter);

// counter = 'sanka.. override';

// console.log('change counter on global scope ', counter);


// CLOSURES EXAMPLE

// function outerScope() {
//     let counter = 0;
//     return function() {
//         counter += 1;
//         return counter;
//     }
// }

// const addOne = outerScope();

// let counter = addOne();

// console.log('value of counter is ', counter);

// counter = addOne();

// console.log('after changing value in counter ', counter);

// counter -= 1;

// console.log('after changing value in counter ', counter);

// counter = addOne();

// console.log('after changing value in counter ', counter);


//CLOSURES MORE EXAMPLE

function outer() {
    var b = 10;
    function inner() {
        
            var a = 20; 
            console.log(a+b);
    }
    return inner;
}
var X = outer(); 
console.dir(X); //use console.dir() instead of console.log()



