
var arr = [1,2,3,4]; 

// for each     : Used like for loop
arr.forEach((value)=> {
    console.log(value + " Hello");
})

// .map()       : used to form a new array from the existing one
console.log(arr.map((value)=> {
    return value+12;
}));

// .filter()    : just filtering
console.log(arr.filter((value) => {
    if(value%2 == 0)
        return true;
    else
        return false;
}));

// . find()     
console.log(arr.find((value) => {
    if(value === 2)
        return value;
}));

// .indexOf()
var i = arr.indexOf(12);
console.log(i);     // returns -1 if doesn't exist

console.log(arr.indexOf(4));


var product = {
    name: 'clothes',
    cost: 125
};

console.log(JSON.stringify(product));
JSON.parse(JSON.stringify(product));
console.log(product);


document.write("Hi");
setTimeout(() => {
    document.write("Ha bol ata");
},3000);
document.write("thamb ki jra");