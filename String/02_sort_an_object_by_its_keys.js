/*
    Sort an Object by its Keys.
    <-------------------------->
`
    Input: { '2' : "Car", '1' : "Bike", '3' : "ATempo" }`

    Output: { '1': 'Bike', '2': 'Car', '3': 'ATempo' }
*/

/*<<<<<<<<<<<<<---------------------------- Using Object.keys() and Sorting -------------------------->>>>>>>>>>>>*/

const sortObjectByKeys = (obj) => {
    let sortedKeys = Object.keys(obj).sort(); // Sort the keys

    let sortedObj = {};
    sortedKeys.forEach(key => {
        sortedObj[key] = obj[key];  // Build the new object
    });

    return sortedObj;
};
const input = { '2': "Car", '1': "Bike", '3': "ATempo" };
console.log(sortObjectByKeys(input));

/* Output:{ '1': 'Bike', '2': 'Car', '3': 'ATempo' } */


/*
    Time complexity: O(n log n)
    Space Complexity: O(n), We store the keys in an array and create a new sorted object.
*/



/*<<<<<<<<<<<<<--------------------------- Using Object.entries() and Sorting ------------------------>>>>>>>>>>>>*/

const sortObjectByEntries = (obj) => {
    let sortedEntries = Object.entries(obj).sort(([keyA], [keyB]) => keyA - keyB);  // Sort by keys

    let sortedObj = {};
    sortedEntries.forEach(([key, value]) => {
        sortedObj[key] = value;
    });

    return sortedObj;
};
console.log(sortObjectByEntries({ '4': "Ox", '2': "Car", '1': "Bike", '3': "ATempo" }));

/* Output: { '1': 'Bike', '2': 'Car', '3': 'ATempo', '4': 'Ox' } */


/*
    Time complexity: O(n log n)
    Space Complexity: O(n): We store the entries in an array and create a new sorted object.
*/



/*<<<<<<<<<<<<<-------------------------------- Using Map and Sorting ------------------------------->>>>>>>>>>>>*/

const sortObjectUsingMap = (obj) => {
    let map = new Map(Object.entries(obj));
    let sortedMap = new Map([...map.entries()].sort((a, b) => a[0] - b[0]));  // Sort map entries by keys

    let sortedObj = Object.fromEntries(sortedMap);  // Convert back to an object

    return sortedObj;
};
console.log(sortObjectUsingMap({ '2': "Car", '1': "Bike", '3': "ATempo" }));

/* Output: { '1': 'Bike', '2': 'Car', '3': 'ATempo' } */


/*
    Time Complexity: O(n log n): Sorting the entries of the map by keys takes O(n log n) time.
    Space Complexity: O(n): We create a new Map and then convert it back to an object, requiring O(n) space.
*/



/*<<<<<<<<<<<<<----------------------- Using Object.fromEntries() with Sorting ---------------------->>>>>>>>>>>>*/

const sortObjectDirectly = (obj) => {
    return Object.fromEntries(
        Object.entries(obj).sort(([keyA], [keyB]) => keyA - keyB)  // Sort the entries by keys
    );
};
console.log(sortObjectDirectly({ '4': "Monkey", '2': "Car", '1': "Bike", '3': "ATempo" }));

/* Output: { '1': 'Bike', '2': 'Car', '3': 'ATempo', '4': 'Monkey' } */


/*
    Time Complexity: O(n log n): Sorting the entries by keys takes O(n log n).
    Space Complexity: O(n): We store the sorted entries and convert them back into an object.
*/