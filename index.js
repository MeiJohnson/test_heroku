const http = require('http');
const moment = require('moment');
//const PORT = 3214;
http.createServer((req,res) => {
    const m = moment().format('DD/MM/YYYY HH:mm');
    res.setHeader('Content-Type','text/html; charset=utf-8')
    res.end(`<h1>Царулкова Анастасия Витальевна</h1><h2>${m}</h2>`);
}).listen(process.env.PORT);