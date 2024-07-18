
const experess = require('express');
const app = experess();

// creating route
app.get("/",(req,res) => {      
    res.send('Champion meraaaaa Anukkkkj');
    res.end();
});

// creatinng rout on localhost:3002/profile
app.get("/profile",(req,res) => {
    res.send('Champion uska coachuuuu');
    res.end();
});

app.listen(3002);

