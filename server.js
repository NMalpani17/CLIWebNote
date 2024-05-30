import http from 'node:http'

const server= http.createServer((req,res)=>{
res.statusCode=200
res.setHeader('Content-type','text/plain')
res.end('Hey there')
})

server.listen(4000,()=>{
    console.log("Server is ready to respsond")  
})

