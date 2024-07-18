// The node:fs module enables interacting with the file system in a way modeled 
// on standard POSIX functions
const fs = require('node:fs');

// fs.writeFile("hey.txt","Good morning",function(err){
//     if(err) console.log(err);
//     else console.log("Done");
// });

fs.appendFile("hey.txt","Breakfast ?",function(err){
    if(err) console.log(err);
    else    console.log("Done");
});

fs.copyFile("hey.txt","hello.txt",function(err){
    if(err)     console.log(err);
    else        console.log("done");
});