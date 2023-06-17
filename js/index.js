function convert() {
    let amount = parseFloat(document.getElementById("amount").value);
    let fromCurrency = document.getElementById("from").value;
    let toCurrency = document.getElementById("to").value;
    let exchangeRate;

    if (fromCurrency === "usd" && toCurrency === "cad") {
        exchangeRate = 1.32;
    } else if (fromCurrency === "cad" && toCurrency === "usd") {
        exchangeRate = 0.76;
    } else {
        let resultElement = document.getElementById("result");
        resultElement.textContent = "Invalid conversion. Please select different currencies.";
        return;
    }

    let convertedAmount = amount * exchangeRate;
    let resultElement = document.getElementById("result");
    resultElement.textContent = "Converted amount: " + convertedAmount.toFixed(2) + " " + toCurrency.toUpperCase();
}