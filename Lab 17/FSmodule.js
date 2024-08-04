const fs = require("fs");
// fs.exists('./PathModule.js',(a)=>{console.log(a)});
ans = '';

fs.readFile('test.txt', (err,data)=>{
    ans = data.toString();
});
setTimeout(() => {
    console.log(ans);

    fs.writeFile('trial.txt',ans,(err)=>{
        console.log("File has been saved");
    });
},2000)


// async function readFileAsync() {
//     try {
//         await fs.readFile('test.txt', (er,data) => {
//             ans = data
//             console.log("ans = " + data.toString());
//         });
//     } catch (err) {
//         console.error(err);
//     }
// }

// readFileAsync();
