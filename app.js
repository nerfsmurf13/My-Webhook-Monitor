const express = require("express");
require('dotenv').config();
const app = express();

// app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const port = process.env.PORT || 3000;

app.post("/", (req, res) => {
  res.send(`Hello, World!`);
});

app.post("/test", (req, res) => {
  try {
    console.log(req.body);
    res.send(JSON.stringify(req.body));
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

app.get("/test",(req,res)=>{
  try {
    console.log(req.query);
    res.send(JSON.stringify(req.query));
  } catch (error) {
    console.log(error);
    res.send(error);
  }
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
