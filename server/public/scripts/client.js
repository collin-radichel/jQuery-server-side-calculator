$(document).ready(handleReady);

function handleReady() {
  console.log("jQuery loaded");

  displayResults();

  $("#addBtn").on("click", addBtn);
  $("#equalsBtn").on("click", equalsBtn);
  $("#subBtn").on("click", subBtn);
  $("#multiplyBtn").on("click", multiplyBtn);
  $("#divideBtn").on("click", divideBtn);
  $('#clearBtn').on('click', clearBtn);
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
    $('#answer').empty();
    $('#answer').append(`
      <p>${resultHistory[resultHistory.length-1].answer}</p>
    `)
    $("#resultsHistoryList").empty()
    for (let i = 0; i < resultHistory.length; i++) {
      console.log(result);
      console.log(resultHistory);
      $("#resultsHistoryList").append(`
      <li>${resultHistory[i].num1} ${resultHistory[i].strOperator}
       ${resultHistory[i].num2} = ${resultHistory[i].answer}</li>
      `);
    }
  });
}

function clearBtn() {
  $('#num1In').val('');
  $('#num2In').val('');
}