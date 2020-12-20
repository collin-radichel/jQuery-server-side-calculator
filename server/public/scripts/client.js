$(document).ready(handleReady);

function handleReady() {
  console.log("jQuery loaded");
  $('resultsHistoryList').empty();

  $("#addBtn").on("click", addBtn);
  $("#equalsBtn").on("click", equalsBtn);
  $("#subBtn").on("click", subBtn);
  $("#multiplyBtn").on("click", multiplyBtn);
  $("#divideBtn").on("click", divideBtn);
}

let result = {};

function addBtn() {
  result.operator = "+";
  result.num1 = $("#num1In").val();

  console.log(result);
}

function subBtn() {
  result.operator = "-";
  result.num1 = $("#num1In").val();

  console.log(result);
}

function multiplyBtn() {
  result.operator = "*";
  result.num1 = $("#num1In").val();

  console.log(result);
}

function divideBtn() {
  result.operator = "/";
  result.num1 = $("#num1In").val();

  console.log(result);
}

function equalsBtn() {
  $('resultsHistoryList').empty();

  result.num2 = $("#num2In").val();

  if (result.num2) {
    console.log(result.num2);
    $.ajax({
      url: "/calculation",
      type: "POST",
      data: result,
    }).then(function (response) {
      console.log(response);
      displayResults();
    });
  }
}

function displayResults() {
  $.ajax({
    url: "/calculation",
    type: "GET",
  }).then(function (response) {
    let resultHistory = response;
    console.log(resultHistory);
    for (let i = 0; i < resultHistory.length; i++) {
      console.log(result);
      console.log(resultHistory);
      

      $("#resultsHistoryList").append(`
      <li>${resultHistory[i]}</li>
      `);
    }
  });
}
