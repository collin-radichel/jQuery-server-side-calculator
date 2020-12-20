const express = require("express");
const bodyParser = require("body-parser");

// call express function, create a server, save in app
const app = express();
const PORT = 5000;

// Serve static files! HTML, CSS, JS
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

  // game logic
  if (result.operator === "+") {
    answer = Number(result.num1) + Number(result.num2);
    strOperator = "+";
  } else if (result.operator === "-") {
    answer = Number(result.num1) - Number(result.num2);
    strOperator = "-";
  } else if (result.operator === "*") {
    answer = Number(result.num1) * Number(result.num2);
    strOperator = "*";
  } else if (result.operator === "/") {
    answer = Number(result.num1) / Number(result.num2);
    strOperator = "/";
  }

  //use the spread operator instead of resultsHistory.push
  // resultHistory = [
  //   ...resultHistory,
  //   `${result.num1} ${strOperator} ${result.num2} = ${answer}`,
  // ];

  resultHistory.push( {
    num1 : result.num1,
    strOperator : strOperator,
    num2 : result.num2,
    answer : answer
  });
    
    // `${result.num1} ${strOperator} ${result.num2} = ${answer}`;

  console.log(resultHistory);

  //should send Status Created
  res.sendStatus(201);
});

// GET route for /calculation
app.get('/calculation', (req,res) => {
    res.send(resultHistory)
})

//LISTEN

app.listen(PORT, () => {
  console.log("Server running on PORT", PORT);
});
