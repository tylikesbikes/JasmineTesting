window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  let principal=0;
  let rate=0;
  let termYears=0;
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  /*let principal = document.querySelector('#loan-amount').value;
  let rate = document.querySelector('#loan-rate').value/1200;
  let termYears = document.querySelector('#loan-years').value*12;*/

  const values = {
    amount : principal = document.querySelector('#loan-amount').value,
    rate : rate = document.querySelector('#loan-rate').value/1200,
    termYears : document.querySelector('#loan-years').value*12
  };

  let monthlyPayment = calculateMonthlyPayment(values);

  updateMonthly(monthlyPayment);

}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  //shall accept an array.
  // values[0] is the total principal,
  // values[1] contains the interest rate as a decimal number (e.g. a rate of 3.5% will be passed as 3.5, not .035 or 3.5%, etc.)
  // values[2] contains the number of years of the loan term

   return ((values.amount*values.rate)/(1-(1+values.rate)**(values.termYears*(-1)))).toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  document.querySelector('#monthly-payment').innerText = monthly;

}
