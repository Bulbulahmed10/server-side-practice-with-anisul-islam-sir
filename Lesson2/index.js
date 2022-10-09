//! fs

// const fs = require('fs');

// console.log(fs);

// fs.exists( 'demo.txt', (result) => {
//     if(result) {
//         console.log("found");
//     }else{
//         console.log("not found");
//     }
// })

//! os

// const {totalmem, freemem} = require("os")
// console.log(os.userInfo());
// console.log(os.homedir());
// console.log(os.hostname());
// console.log(totalmem());
// console.log(freemem());

//! path



const path = require("path")

const extensionName = path.extname("index.html")

console.log(extensionName);

const joinName = path.join