a = 5;//global scope, can be accessed anywhere
function demo(){
    a = 6;
    console.log("Inside:"+a);
    if(2>1){
        let b = 4;//let and const have block scope, cannot be accesed outside block
        const c = 7;//value cannot be changed
    }
   //console.log(b)--> error
    var x = 2;//functional scope, can be accessed anywhere inside the function but not outside it
}
console.log("outside: "+a);//if function is called then its value changes to six

//METHODS TO CREATE A FUNCTION
//1) acts as function, global scope, can be called before its declaration in code
disp();
function disp(call){
        console.log("global");
    }
//2) as a variable
const a = ()=>{

}
//3 anonymous function
disp(() => {})
