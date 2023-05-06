function compute() {
  let amount = document.getElementById("amount").value;
  if (amount <= 0) {
    alert("Enter a positive number");
    return false;
  }

  let slider = document.getElementById("slider").value;
  // let rate = document.getElementById("rate");
  // rate.innerHTML = slider + "%";

  let years = Number(document.getElementById("option").value);
  let presentYear = new Date().getFullYear();
  let compute = amount * slider * (years / 100);

  let answer = document.getElementById("ans");

  answer.innerHTML =
    "If you deposit " +
    "<span class='highlight'>" +
    amount +
    "</span>," +
    " <br> at an interest rate of " +
    "<span class='highlight'>" +
    slider +
    "%" +
    "</span>," +
    "<br> You will receive an amount of " +
    "<span class='highlight'>" +
    compute +
    "</span>," +
    "<br> in the year " +
    "<span class='highlight'>" +
    (presentYear + years) +
    "</span>";
}

function sliderValue() {
  var input = document.getElementById("slider");
  var rate = document.getElementById("rate");
  rate.innerHTML = input.value + "%";
}
