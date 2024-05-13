// server.mjs
import { createServer } from 'node:http';
const server = createServer(async (req, res) => {
    const ipReqest = await fetch('https://api.ipify.org?format=json');
    const data = await ipReqest.json();
    res.writeHead(200, { 'Content-Type': 'text/plan' });
    res.end(data.ip);
});
// starts a simple http server locally on port 3000
server.listen(3000, () => {
    console.log('Listening on 127.0.0.1:3000');
});