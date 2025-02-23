// // Unit tests for the helloWorld function
// describe('helloWorld', function() {
//     it('should be a defined function', function() {
//       expect(typeof helloWorld).toBe('function');
//     });
//     it('should return a string when called', function() {
//       expect(typeof helloWorld()).toBe("string");
//     });
//     it('should return the string "Hello, World!" when executed', function() {
//       expect(helloWorld()).toBe("Hello, World!");
//     });
//     it("should never return 'undefined' when called", function() {
//       expect(helloWorld()).not.toBe(undefined);
//     });
// });

// //  Unit tests for sayHello function
// describe('sayHello', function (){
//     it('should be a defined function', function (){
//         expect(typeof sayHello).toBe('function');
//     });
//     it('should return a string when called', function (){
//         expect(typeof sayHello()).toBe('string');
//     });
//     it('should return the string "Hello, World!" when called', function(){
//         expect(sayHello()).toBe("Hello, World!");
//     });
//     it('should return the string "Hello, Jane!" when executed', function(){
//         expect(sayHello("Jane")).toBe("Hello, Jane!");
//     });
//     it('should return the string "Hello, Alex!" when executed', function (){
//         expect(sayHello("Alex")).toBe("Hello, Alex!");
//     });
//     it('should return the string "Hello, Pat!" when executed', function (){
//         expect(sayHello("Pat")).toBe("Hello, Pat!");
//     });
//     it('should return the string "Hello, World!" when true', function(){
//         expect(sayHello(true)).toBe("Hello, World!");
//     });
//     it('should return the string "Hello, World!" when false', function(){
//         expect(sayHello(false)).toBe("Hello, World!");
//     })
//     it('should return the string "Hello, World!" when null', function(){
//         expect(sayHello(null)).toBe("Hello, World!");
//     });
//     it('should return the string "I\'m an empty string!', function(){
//         expect(sayHello('')).toBe("I'm an empty string!");
//     })
//     it('should return the string "I\'m a number!', function(){
//         expect(sayHello(2)).toBe("I'm a number!");
//     })
//     it('should return the number', function(){
//         expect(sayHello('4')).toBe("I'm a string!");
//     })
// });

// //  Unit test for isFive(input)
// describe('isFive', function(){
//     it('should be a defined function', function(){
//         expect(typeof isFive).toBe('function');
//     });
//     it('should be a boolean', function(){
//         expect(isFive()).toBe(false);
//     });
//     it('isFive(\'string\') should return false', function(){
//         expect(isFive(typeof 'string')).toBe(false);
//     });
//     it('isFive("5") should return true', function(){
//         expect(isFive("5")).not.toBe(false);
//     });
//     it('isFive(3) should return false', function(){
//         expect(isFive()).toBe(false);
//     })
// })

//  Unit test for isEven(input)
describe('isEven', function(){
    it('should be a defined function', function(){
        expect(typeof isEven).toBe('function');
    });
    it('should be a boolean', function(){
        expect(isEven).toBeTruthy();
    });
    it('returns true when executed with isEven(2)', function(){
        expect(isEven(2)).toBe(true);
    });
    it('returns true when executed with isEven(-4)', function(){
        expect(isEven(-4)).toBe(true);
    });
    it('returns false when executed with isEven(3)', function(){
        expect(isEven(3)).toBe(false);
    });
    it('returns false when called with isEven("banana")', function(){
        expect(isEven("banana")).toBe(false);
    });
    it('returns true when called with isEven("8")', function(){
        expect(isEven('8')).toBe(true);
    });
    it('returns false when called with isEven(Infinity)', function(){
        expect(isEven(Infinity)).toBe(false);
    });
    it('return false when called with a boolean input like isEven(true) or isEven(false)', function(){
        expect(isEven(true && false)).toBe(false);
    });
    it('returns false when called without an argument like isEven()', function(){
        expect(isEven()).toBe(false);
    })
})

//  Unit test for isVowel(input)
describe('isVowel', function() {
    it('should be a defined function', function () {
        expect(typeof isVowel).toBe('function');
    });
    it('should always return a boolean', function(){
        expect(typeof isVowel(3)).toBe('boolean');
        expect(typeof isVowel('a')).toBe('boolean');
    });
    it('isVowel("a") returns true', function(){
        expect(isVowel('a')).toBe(true);
    });
    it('isVowel("A") returns true', function(){
        expect(isVowel('A')).toBe(true);
    });
    it('isVowel("y") returns false', function(){
        expect(isVowel('y')).toBe((false));
    });
    it('isVowel(4) returns false', function(){
        expect(isVowel(4)).toBe(false);
    });
    it('isVowel(true) or isVowel(false) both return false', function(){
        expect(isVowel(true)).toBe(false);
        expect(isVowel(false)).toBe(false);
    });
    it('isVowel("banana") returns false', function(){
        expect(isVowel('banana')).toBe(false);
    });
    it('isVowel() returns false', function(){
        expect(isVowel()).toBe(false);
    });
})
