function calculate() {
	// Get input values
	var principal = parseFloat(document.getElementById("principal").value);
	var interestRate = parseFloat(document.getElementById("interest").value) /100;
    var term = parseInt(document.getElementById("term").value) * 12;

// Calculate monthly payment
var monthlyInterestRate = (interestRate / 100) / 12;
var x = Math.pow(1 + monthlyInterestRate, term);
var monthlyPayment = (principal * x * monthlyInterestRate) / (x - 1);
var totalPayment = monthlyPayment * term;
var totalInterest = totalPayment - principal;

// Display results
document.getElementById("monthly-payment").value = "$" + monthlyPayment.toFixed(2);
document.getElementById("total-payment").value = "$" + totalPayment.toFixed(2);
document.getElementById("total-interest").value = "$" + totalInterest.toFixed(2);

// Show results
document.getElementById("result").classList.remove("d-none");
}
