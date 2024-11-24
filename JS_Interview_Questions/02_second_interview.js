/*
    Problem Statement: 

    Input: console.log(computeAmount().lacs(15).crore(5).crore(2).lacs(20).thousand(45).crore(7).value());

    Output: 143545000

    Solution :- We can achieve the desired functionality using a recursive approach with closures to maintain state between calls.
*/

const computeAmount = (value, total = 0) => {
    if (value) {
        total = total + value;
    }
    return {
        lacs: function (value) {
            return computeAmount(value * 100000, total);
        },
        crore: function (value) {
            return computeAmount(value * 10000000, total);
        },
        thousand: function (value) {
            return computeAmount(value * 1000, total);
        },
        value: function () {
            return total;
        }
    }
};
console.log(computeAmount().lacs(15).crore(5).crore(2).lacs(20).thousand(45).crore(7).value());



/*<------------------ Question: What will be the output? --------------------->*/

var obj = {
    helloWorld: function() {
        return "Hello world, " + this.name;
    },
    name: "Hello"
};

var obj2 = {
    helloWorld: obj.helloWorld,
    name: "Bye"
};

console.log(obj2.helloWorld()); // Output: Hello world, Bye

console.log(obj2.helloWorld.call(obj)); // Output: Hello world, Hello

/*
    Answer: The output is "Hello world, Bye" 
    
    because this inside the helloWorld function refers to the obj2 object, which has a name property set to "Bye".
*/


/*
    Follow-up: How can we print "Hello world, Hello" instead of "Hello world, Bye"?

    To ensure this inside the helloWorld function always refers to obj, you can use the bind method to explicitly 
    bind the function to obj when assigning it to obj2.
*/

var obj2 = {
    helloWorld: obj.helloWorld.bind(obj), // Explicitly bind helloWorld to obj
    name: "Bye"
};
console.log(obj2.helloWorld()); // Output: Hello world, Hello
