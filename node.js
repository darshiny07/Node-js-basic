const http =require('http')
 

const server = http.createServer((req , res )=>{
    res.setHeader('content-type' ,'text/plain' );
    res.write("hey wats up")
    res.write("im writing node js code")
    res.end()
})
server.listen(8080)

