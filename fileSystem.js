// The Node.js file system module allows you to work with the file system on your computer.

// CREATE FILE

const http = require('http')
const fs = require('fs')

http.createServer(function(req, res){

    fs.appendFile('createFile.txt' , function(err,data){
        if(err){
            return console.log.error(err)
        }
       console.log(data.toString());
       res.write()
       res.end()
    })
}).listen(8080)
