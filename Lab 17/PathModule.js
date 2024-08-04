var path = require('path');

console.log("path.basename() = " + path.basename("./NPM.js"));
console.log("path.dirname() = " + path.dirname("/foo/NPM.js"));

console.log(path.isAbsolute("C:\\Users\\student\\Desktop\\Orange3-3.37.0\\Orange\\share\\Orange\\3.37.0\\canvas"));

let a = path.join("foo",'nav','.','.','abc');
console.log("a = " + a);

 let b = 'foo\\bar\\baz'.split(path.sep);
console.log("b = "+ b);

console.log(path.delimiter);