const http = require('http')
const port = 1004

http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Hello Web Application')
    } else if (req.url === '/special_url') {
        console.log(req.url)
        res.end(`The url is "${req.url}"`)
    } else if (req.url === '/about') {
        res.end('About Me')
    } else if (req.url === '/portfolio') {
        res.end('These are my portfolios')
    } else if (req.url === '/contact') {
        res.end('You can contact me with fume')
    } else if (req.url === '/shop') {
        res.end('A shop is set to open here')
    } else {
        res.end('Not Found.')
    }
}).listen(port)

console.log(`Server is running on port:${port}`)