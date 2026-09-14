const express = require('express');
const app = express();
app.use((req, res, next) => {
console.log("Request Method:", req.method);
console.log("Request URL:", req.url);
next();

});
app.get('/', (req, res) => {
res.send("Middleware Example");
});
app.listen(3000, () => {
console.log("Server running...");
});

//npm install express

//node index.js

//http://localhost:3000/