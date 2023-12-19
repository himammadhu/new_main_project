const express = require('express') 
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const PORT = 5000

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, () => {
    console.log("Server is Running");
  });

  app.get("/Test", (req, res) => {
    res.send({
      message: "Hai",
    });
  });
  