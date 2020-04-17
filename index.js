
const express = require('express');

const inspc = require('inspc');

require('dotenv-up')({
    override    : false,
    deep        : 1,
}, true, 'index.server');

const host      = process.env.HOST;
const port      = process.env.PORT;

const app = express();

app.use((req, res, next) => {
    
    const path = req.path;
    
    if (/aaa/.test(path)) {
        
        return res.end(`found aaa: ${path}`);
    }
    
    next();
});

app.use(express.static('.', { // http://expressjs.com/en/resources/middleware/serve-static.html
    // maxAge: 60 * 60 * 24 * 1000 // in milliseconds
    maxAge: '356 days', // in milliseconds max-age=30758400
    setHeaders: (res, path) => {

        if (/\.bmp$/i.test(path)) { // for some reason by default express.static sets here Content-Type: image/x-ms-bmp

            res.setHeader('Content-type', 'image/bmp')
        }

        // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control
        // res.setHeader('Cache-Control', 'public, no-cache, max-age=30758400')
        // res.setHeader('Cache-Control', 'public, only-if-cached')
    }
}));

app.all('/test', (req, res) => {
    return res.end('test...');
})
app.get('/test1', (req, res) => {
    return res.end('test... get');
})
app.post('/test2', (req, res) => {
    return res.end('test... post');
})


const server    = require('http').createServer(app);


server.listen( // ... we have to listen on server
    port,
    host,
    undefined, // io -- this extra parameter
    () => {

        console.log(`\n 🌎  Server is running ` + ` ${host}:${port} ` + "\n")
    }
);
