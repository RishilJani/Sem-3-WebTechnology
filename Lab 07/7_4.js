let arr1 = [1,3,5];//... = spread operator ,used for concatenation or destructure array without loops
let arr2 = [2,4,6];
console.log(...arr1);
let newArr = [2,3,...arr1];
let concatArr = [...arr1,...arr2];//concatenates
const [a,o,c,...ouio] = concatArr
console.log(a);
console.log(o);
console.log(c);
console.log(ouio);
// console.log(newArr);
// console.log(concatArr);
abc= {
    x: 2,
    y: 4,
}
bat= {
    b:5,
    c:10,
}
 concat = {...abc,...bat};
 console.log(concat);
 const {b,...rest} = concat
 console.log(b)
 console.log(rest);

