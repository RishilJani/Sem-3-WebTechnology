const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.send("Hello World");
})

app.listen(3110,()=>{
    console.log("Server started...");
});