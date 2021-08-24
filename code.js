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
    if(typeof input === 'undefined'){
        return "Hello, World!";
    }else{
        return "Hello, " + input + "!";
    }
}