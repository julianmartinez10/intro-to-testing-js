// helloWorld function
//  function statement:
// function helloWorld() {
//     return "Hello, World!";
// }
//  function expression:
const helloWorld = function(){
    return "Hello, World!";
}

//  // sayHello function
// function sayHello(input){
//     if(input === true){
//         return "Hello, World!";
//     }
//     if(input === false){
//         return "Hello, World!";
//     }
//     if(typeof input === 'undefined'){
//         return "Hello, World!";
//     }else if(input === null){
//         return "Hello, World!";
//     }else if(input === ''){
//         return "I'm an empty string!";
//     }else if(typeof input === 'number'){
//         return "I'm a number!";
//     }else if(input === 'Jane' || input === 'Alex' || input === 'Pat'){
//         return `Hello, ${input}!`;
//     }else{
//         return 'I\'m a string!';
//     }
//
//    //  REFACTORED
//     // if(typeof input === "boolean" || typeof input === "undefined" || input === null){
//     //     return helloWorld;
//     // }else{
//     //     return "Hello, " + input + "!";
//     // }
//     //  EDGE CASES
// }

// function isFive(input){
//     // if(input == '5'){
//     //     return true;
//     // }else if(typeof input === 'string'){
//     //     return false;
//     // }else if(input !== 5){
//     //     return false
//     // }else {
//     //     return true;
//     // }
//     //  REFACTORED
//     if(input == 5){
//         return true;
//     }else{
//         return false;
//     }
// }

function isEven(input){
    //  REFACTOR
    if(input % 2 == 0 && typeof input !== 'boolean'){
        return true;
    }else{
        return false;
    }
}

//  isVowel Function
function isVowel(input){
    if(input === 'a' || input === 'A'){
        return true;
    }else if(input === 'e' || input === 'E'){
        return true;
    }else if(input === 'i' || input === 'I'){
        return true;
    }else if(input === 'o' || input === 'O'){
        return true;
    }else if(input === 'u' || input === 'U'){
        return true;
    }else if(input === true || input === false){
        return false;
    }
    return typeof input === 'boolean';
}

//  isVowel Refactor Function
// function isVowel(input){
//     switch(input.toLowerCase()){
//         case 'a':
//             return true;
//             break;
//         case 'e':
//             return true;
//             break;
//         case 'i':
//             return true;
//             break;
//         case 'o':
//             return true;
//             break;
//         case 'u':
//             return true;
//             break;
//     }
//
//     return typeof input === 'boolean';
// }