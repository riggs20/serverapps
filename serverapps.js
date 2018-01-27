/*
Instructions

Using the previous example as a guide, create an app that has two web servers.
One that listens on port 7000 and one that listens on port 7500.
The one listening on port 7000 will always tell the user something good about themselves.
The one listening on 7500 will always tell the user something bad about themselves.
Make sure you create a Github repo and commit this code!
Bonus

Look for other ways to expand what your server can do. As possibilities:
Generate the good/bad phrase randomly from a list of predefined phrases
Use the twitter package inside the response to also return a random tweet
*/


const http = require("http");

const port01 = 7000;

const handleRequest01 = (req, res) => {
    res.end("You look beautiful! " + req.url);
}

const server01 = http.createServer(handleRequest01);

server01.listen(port01, () =>
    console.log("Server is listening on: " + port01));


const port02 = 7500;

const handleRequest02 = (req, res) => {
    res.end("You didn't work hard enough. " + req.url);
}

const server02 = http.createServer(handleRequest02);

server02.listen(port02, () =>
    console.log("Server is listening on: " + port02));
