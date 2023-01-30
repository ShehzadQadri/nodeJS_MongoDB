import express from 'express';
import userFolder from './userFolder/index.js';
import os from "os";
import net from 'net';
import open from 'open';

let port = Math.ceil(Math.random() * 2) + 3000;
const server = net.createServer();

server.listen(port);
server.on('error', (err) => {
    console.log(`Port ${err.code} is not busy`);
    server.close();
});

server.on('close', () => {
    console.log('Server closed');
});

server.close()

const app = express();
const mac = os.networkInterfaces()

app.use(express.json())

app.use('/userfolderapi', userFolder)

app.use('/', (req, res) => {
    res.send(new Date());
    console.log('requested from ip: ' + req.ip);
    console.log(mac['Wi-Fi'][1].address)
    console.log(mac['Wi-Fi'][1].mac)
})

app.listen(port, () => {
    console.log(`Server Running on port "${port}" on ip: "${mac['Wi-Fi'][1].address}:${port}"`);
    // open(`http://localhost:${port}`);
    console.log(` localhost:${port}`);
    console.log(` ${mac['Wi-Fi'][1].address}:${port}`);
    console.log('wait... browser is open');

    open(`http://${mac['Wi-Fi'][1].address}:${port}`);
})
