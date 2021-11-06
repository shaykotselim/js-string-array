const products = [
    'Dell hardcore i29 200GB laptop',
    'iphone 1Tb camera flashlight phone',
    'yellow laptop with black camera',
    '1X59 lenova commarcial yoga laptop',
    'LG supernova laptop',
    'HTC low price phone',
    'Dell purper color phone with laptop'
];

const searching = 'laptop';
// indexOf()
const output = [];
for (const product of products){
    if( product.indexOf(searching) != -1){
    //  output.push(product);
    }
}
// console.log(output);

// includes()
for (const product of products){
    if(product.toLowerCase().includes(searching.toLowerCase())){
        // output.push (product)

    }
}
//  console.log(output);

for (const product of products){
    if (product.toLowerCase().startsWith(searching.toLowerCase())){
        output.push(product)
    }
}
console.log( output);

for (const product of products){
    if (product.toLowerCase().endsWith(searching.toLowerCase())) {
        output.push(product)
    }
}
console.log(output);