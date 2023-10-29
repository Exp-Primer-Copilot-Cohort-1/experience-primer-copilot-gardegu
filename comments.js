// Create web server
// 1. Create a web server
// 2. Read the file
// 3. Send the content back to the client
// 4. Handle errors

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    // console.log(req.url, req.method);

    // set header content type
    res.setHeader('Content-Type', 'text/html');

    // send an html file
    // fs.readFile('./views/index.html', (err, data) => {
    //     if (err) {
    //         console.log(err);
    //         res.end();
    //     }
    //     // res.write(data);
    //     res.end(data);
    // });

    // send a json file
    // fs.readFile('./data.json', (err, data) => {
    //     if (err) {
    //         console.log(err);
    //         res.end();
    //     }
    //     res.setHeader('Content-Type', 'application/json');
    //     res.end(data);
    // });

    // Basic routing
    let path = './views/';
    switch (req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-us':
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }

    // send an html file
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        }
        res.end(data);
    });
});

server.listen(3000, 'localhost', () => {
    console.log('Listening for requests on port 3000');
});