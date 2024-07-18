// to create server

const http = require('http');

const server = http.createServer(function(req,res){
    res.write('Server chalu zalay');
    res.end();
});

server.listen(3001);    
