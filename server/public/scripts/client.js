$(document).ready(handleReady);

function handleReady() {
  console.log("jQuery loaded");

  $("#addBtn").on("click", addBtn);
  $("#equalsBtn").on("click", equalsBtn);
}

let result = {};

function addBtn() {
  result.operator = "+";
  result.num1 = $("#num1In").val();

  console.log(result);
}

function equalsBtn() {
  result.num2 = $("#num2In").val();

  if (result.num2) {
      console.log(result.num2)
    $.ajax({
      url: "/calculation",
      type: "POST",
      data: result
    }).then(function (response) {
      console.log(response);
    //   displayResults();
    });
  }
}

// function displayResults() {

// }
