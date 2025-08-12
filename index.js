//Packages 
import express from 'express'
import http from 'http'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import { Server } from 'socket.io'

//Instances
const app = express()
const server = http.createServer(app)
const io = new Server(server)


//Serving HTML files 

const __dirname = dirname(fileURLToPath(import.meta.url))
console.log(__dirname);
app.get('/', (req, res) => res.sendFile(join(__dirname, 'index.html')))


//Define an connection event handler
io.on('connection', (client_one) => {  // disconnecting a specific client fromthe server
    console.log("User connected to (server) ✅");

//Emit a message event to the client
// client_one.emit('message' , "Server is sending the data to the client")  // the emit method allows to => send < the data 

client_one.on("new message", (message)=>{
    console.log(message);
})

    client_one.on('disconnect', () => {
        console.log('User Disconnected from (Server)❌');
    })
})


//start the server
const PORT = 3000
server.listen(PORT, () => console.log(`Server running on port : ${PORT}`))


