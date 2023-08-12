// Create an initial array
var arr = [1, 2, 3];
console.log('Initial array:', arr); // Output: Initial array: [1, 2, 3]

// .push - Add an element to the end
arr.push(4);
console.log('After push:', arr); // Output: After push: [1, 2, 3, 4]

// .unshift - Add an element to the beginning
arr.unshift(0);
console.log('After unshift:', arr); // Output: After unshift: [0, 1, 2, 3, 4]

// .pop - Remove the last element
arr.pop();
console.log('After pop:', arr); // Output: After pop: [0, 1, 2, 3]

// .shift - Remove the first element
arr.shift();
console.log('After shift:', arr); // Output: After shift: [1, 2, 3]

// .at - Get the element at a specific index
console.log('At index 1:', arr.at(1)); // Output: At index 1: 2

// .indexOf - Find the index of a specific value
console.log('Index of 2:', arr.indexOf(2)); // Output: Index of 2: 1

// .includes - Check if the array includes a specific value
console.log('Includes 3?', arr.includes(3)); // Output: Includes 3? true

// .map - Create a new array by applying a function to each element
var doubled = arr.map(x => x * 2);
console.log('After map:', doubled); // Output: After map: [2, 4, 6]

// .filter - Create a new array with elements that pass a test
var filtered = arr.filter(x => x > 1);
console.log('After filter:', filtered); // Output: After filter: [2, 3]

// .every - Check if every element passes a test
console.log('Every element less than 4?', arr.every(x => x < 4)); // Output: Every element less than 4? true

// .some - Check if some element passes a test
console.log('Some element equals 2?', arr.some(x => x == 2)); // Output: Some element equals 2? true

// .fill - Fill all elements with a specific value
arr.fill(5);
console.log('After fill:', arr); // Output: After fill: [5, 5, 5]

// .reduce - Reduce the array to a single value
var sum = arr.reduce((acc, x) => acc + x, 0);
console.log('Sum using reduce:', sum); // Output: Sum using reduce: 15

// .concat - Concatenate two arrays
var concatenated = arr.concat([6, 7]);
console.log('After concat:', concatenated); // Output: After concat: [5, 5, 5, 6, 7]

// .reverse - Reverse the array
arr.reverse();
console.log('After reverse:', arr); // Output: After reverse: [5, 5, 5]

// .sort - Sort the array
var toSort = [3, 1, 2];
toSort.sort();
console.log('After sort:', toSort); // Output: After sort: [1, 2, 3]

// .join - Join the elements into a string
console.log('After join:', arr.join('-')); // Output: After join: '5-5-5'

// .flat - Flatten a nested array
var nested = [1, [2, 3]];
console.log('After flat:', nested.flat()); // Output: After flat: [1, 2, 3]

// .find - Find the first element that passes a test
console.log('Find element equal to 5:', arr.find(x => x === 5)); // Output: Find element equal to 5: 5

// .findIndex - Find the index of the first element that passes a test
console.log('Find index of element equal to 5:', arr.findIndex(x => x === 5)); // Output: Find index of element equal to 5: 0

// .toString - Convert the array to a string
console.log('Array as a string:', arr.toString()); // Output: Array as a string: '5,5,5'

// .slice - Slice a portion of the array
console.log('Slice from 1 to 2:', arr.slice(1, 2)); // Output: Slice from 1 to 2: [5]

// .splice - Replace a portion of the array
arr.splice(1, 1, 6);
console.log('After splice:', arr); // Output: After splice: [5, 6, 5]

// Array.isArray - Check if something is an array
console.log('Is an array?', Array.isArray(arr)); // Output: Is an array? true

// Array.from - Create an array from an iterable
var fromStr = Array.from('123');
console.log('Array from string:', fromStr); // Output: Array from string: ['1', '2', '3']
