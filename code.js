// helloWorld function
//  function statement:
// function helloWorld() {
//     return "Hello, World!";
// }
//  function expression:
const helloWorld = function(){
    return "Hello, World!";
}

 // sayHello function
function sayHello(input){
    if(input === true){
        return "Hello, World!";
    }
    if(input === false){
        return "Hello, World!";
    }
    if(typeof input === 'undefined'){
        return "Hello, World!";
    }else if(input === null){
        return "Hello, World!";
    }else if(input === ''){
        return "I'm an empty string!";
    }else if(typeof input === 'number'){
        return "I'm a number!";
    }else if(input === 'Jane' || input === 'Alex' || input === 'Pat'){
        return `Hello, ${input}!`;
    }else{
        return 'I\'m a string!';
    }

   //  REFACTORED
    // if(typeof input === "boolean" || typeof input === "undefined" || input === null){
    //     return helloWorld;
    // }else{
    //     return "Hello, " + input + "!";
    // }
    //  EDGE CASES
}

function isFive(input){
    // if(input == '5'){
    //     return true;
    // }else if(typeof input === 'string'){
    //     return false;
    // }else if(input !== 5){
    //     return false
    // }else {
    //     return true;
    // }
    //  REFACTORED
    if(input == 5){
        return true;
    }else{
        return false;
    }
}

function isEven(){
    //  FIRST ATTEMPT
    // if(typeof input == NaN){
    //     return false;
    // }else if(input % 2 !== 0){
    //     return false;
    // }else{
    //     return true;
    // }
}