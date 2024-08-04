const child_process = require('child_process');
const path = require('path');
let root = "./Hello.java";
child_process.exec("javac " + root ,(err,stdout,stdin)=>{
    child_process.exec("java " + path.basename(root),(err,stdout,stdin)=>{
        console.log(stdout);
    });
});
const fs = require('fs');
