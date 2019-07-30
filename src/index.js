const express = require("express");

const app = express();

app.get("/", (req, res) => res.send("This is express"));
app.listen(8080, () => console.log("on the console "));
