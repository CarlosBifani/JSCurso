const num1 = [1,2,3];
const num2 = [4,5,6];
//Concatenate:
const a3 = num1.concat(num2);
console.log(a3);

const a4 = num1.concat(num2, [7,8,9], 'Carlos');
console.log(a4);

//rest operator ... spread
const a5 = [...num1, ...num2, ...[7,8,9]];
console.log(a5);

