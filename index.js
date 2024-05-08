
const express = require("express");
const bodyParser = require("body-parser");


const app = express();


app.use(bodyParser.urlencoded({extended: true}));


app.set('view engine', 'ejs');


app.get("/calculate-height", (req, res) => {
  res.render("VolCalculator");
});

app.post("/calculate-height", (req, res) => {
  const radius = Number(req.body.radius);
  const volume = Number(req.body.volume);


  const height = (3 * volume) / (Math.PI * Math.pow(radius, 2));

  res.send(`The height of the cone is ${height.toFixed(2)} units.`);
});


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
