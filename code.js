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
        return "I'm an empty string!"
    }else{
        return 'Hello, ' + input + '!';
    }
    //  REFACTORED
    // if(typeof input === "boolean" || typeof input === "undefined" || input === null){
    //     return helloWorld;
    // }else{
    //     return "Hello, " + input + "!";
    // }
    //  EDGE CASES
}