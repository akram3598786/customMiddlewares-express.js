
const morgan = require("morgan");

const loggerMiddleware = morgan((token, req, res)=>{
//  console.log(token);

 console.log({
    Method : token.method(req,res),
    Status : token.status(req,res),
    ContentLength : token.res(req, res, 'content-length'),
    TimeTaken : `${token['response-time'](req, res)} ms`,
    Date : token.date(),
    HTTPVersion : token['http-version'](req, res),
    URLAccesed : token.url(req, res)
 })
})

module.exports = loggerMiddleware;