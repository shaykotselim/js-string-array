const anthem = 'Amer Sonar Bangla Ami Tomai Valobasi';

const words = anthem.split (' ');
const withoutA = anthem.split('a');

// console.log(withoutA);
// slice
const smallSlice = anthem.slice(5, 19)
// console.log(smallSlice);

// substr
const another =anthem.substr(5,9);
// console.log( another);

// substring
const anotherAnother = anthem.substring(6, 16);
// console.log(anotherAnother);

// concate
const first = 'shaykot';
const second = 'selim';

const third = first.concat(' ').concat(second).concat(' ').concat('one day will be a big onwer of a company')
// console.log(third);

// join
const words2 = [
    'shaykot', 'Selim', 'laptop', 'Dell', 'keybord','Fantech'
]
const alljoined = words2.join(', ')
console.log(alljoined);