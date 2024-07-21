function calculate(a,b,c,callback){
    callback(a,b,c);
}
calculate(4,4,4,multiply);

function ad(a,b,c){
    console.log(a+b+c);
}

function multiply(a,b,c){
    console.log(a*b*c);
}