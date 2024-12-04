
/*<------------------------------------------------------------------------------------------------------------------>*/

const name = "Gajendera Kumar";
age = 26;

console.log(delete name); // Output: false
console.log(delete age); // Output: true

/*
    Reason -
    
    In JavaScript, the behavior of the delete operator depends on the type of the property being deleted and its context.

    Implicit global variables: If a variable is created without a keyword, it becomes a configurable property of the 
    global object and can be deleted.
*/



/*<------------------------------------------------------------------------------------------------------------------>*/

var obj1 = { 
    name: "Gajendera",
    age: 26
};
var obj2 = obj1;
obj2 = {};
console.log(obj1); // Output: { name: 'Gajendera', age: 26 }


let newObj = { 
    role: "web development",
    exp: 2
};
let newObj2 = newObj;
newObj2.role = "mobile development";
console.log(newObj); // Output: { role: 'mobile development', exp: 2 }
console.log(newObj2); // Output: { role: 'mobile development', exp: 2 }

/*
    In Case 1, obj2 is reassigned to a new object ({}). This doesn't affect obj1 because reassignment breaks the 
    link between obj2 and the original object.

    In Case 2, the object itself is mutated (its role property is changed). Since newObj and newObj2 reference 
    the same object, the change is visible through both variables.
*/



/*<------------------------------------------------------------------------------------------------------------------>*/

let str1 = "hello";
str2 = str1;
str2 = "world";
console.log(str1); // Output: hello
console.log(str2); // Output: world

/*
    The behavior is due to the difference between primitive values and objects in JavaScript. Strings are immutable 
    primitives, and assignment creates a copy of the value.
*/



/*<------------------------------------------------------------------------------------------------------------------>*/

const sum = (a = 5, b = 7) => {
    console.log(a + b);
};
sum(null, 20);

/*
    The function sum is called with the arguments null and 20.

    a = null:

    - The first argument is explicitly passed as null.
    - Since null is a valid value, it overrides the default value of a = 5. Thus, a becomes null.
    
    b = 20:

    - The second argument is explicitly passed as 20.
    - This overrides the default value of b = 7. Thus, b becomes 20.

    console.log(a + b);

    - a + b evaluates to null + 20.
    - In JavaScript, when null is used in a numeric operation, it is coerced to 0.
    - Therefore, null + 20 becomes 0 + 20, which evaluates to 20.
*/



/*<------------------------------------------------------------------------------------------------------------------>*/

