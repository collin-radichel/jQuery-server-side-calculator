const express = require("express");
const bodyParser = require("body-parser");

// call express function, create a server, save in app
const app = express();
const PORT = 5000;

// Serve static files! HTML, CSS, JS, etc
app.use(express.static("server/public"));

app.use(bodyParser.urlencoded({ extended: true }));

// SERVE DATA

let resultHistory = [];

//POST ROUTE

app.post("/calculation", (req, res) => {

    console.log(req.body);

  let result = req.body;

    console.log(result);

  let answer;
  let strOperator;

  if (result.operator === "+") {
    answer = Number(result.num1) + Number(result.num2);
    strOperator = "+";
  } else if (operator === "-") {
    answer = Number(result.num1) - Number(result.num2);
    strOperator = "-";
  } else if (operator === "*") {
    answer = Number(result.num1) * Number(result.num2);
    strOperator = "*";
  } else {
    answer = Number(result.num1) / Number(result.num2);
    strOperator = "/";
  }

//    resultHistory = [
//     ...resultHistory,
//     `${result.num1} ${strOperator} ${result.num2} = ${answer}`,
//  ];

 console.log(resultHistory);


  res.sendStatus(201);
});

//LISTEN

app.listen(PORT, () => {
  console.log("Server running on PORT", PORT);
});
