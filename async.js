
/*
async function abcd() {
    var blob = await fetch(`https://randomuser.me/api/`);
    var ans = await blob.json();

    console.log(ans.results[0].name);
}

abcd();
*/
console.log("start");
setTimeout(()=>{
    console.log("hi");
},2000);
setTimeout(()=>{
    console.log("hello");
},0);
console.log("finish");

/*
start
main()
*/