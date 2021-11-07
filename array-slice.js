const number = [3, 6, 4, 8, 19, 21, 45, 87];

const cutSlice = number.slice(2, 5);
// console.log(cutSlice);

// splice

const cutSplice = number.splice(2, 3);
// console.log( cutSplice);
// console.log(number);


const numberSplice = number.splice(2, 3, 112, 112, 113);
console.log(numberSplice);
console.log(number);