const https = require('https');
console.log("inside https");

// https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (resp) => {
https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (resp) => {

console.log("resp",resp)
let data = '';
// A chunk of data has been recieved.
resp.on('data', (chunk) => {
data += chunk;
console.log("data",data)
});
// The whole response has been received. Print out the result.
resp.on('end', () => {
console.log("parse data",JSON.parse(data).explanation);
});
}).on("error", (err) => {
console.log("Error: " + err.message);
});