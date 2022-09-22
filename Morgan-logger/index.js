const express = require("express")
const loggerMiddleware = require("./Middlewares/morgan.middleware");
const app = express()

// Using morgan predefined code
// app.use(morgan("Method-:method URL-:url HTTP_Version-:http-version Status-:status Content_Length-:res[content-length] User_Agent-:user-agent Date-:date  response_time-:response-time"))

// Using customises morgan logger
app.use(loggerMiddleware);
app.get("/", (req, res) => {
    res.status(200).send("Get Request")
});
app.post("/", (req, res) => {
    res.status(201).send("Post Request")
});

const port = 8080;
app.listen(port, () => {
    console.log(`server is running http://localhost:${port}`)
});
