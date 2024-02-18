const to = document.getElementById("to"); 
const from = document.getElementById("from"); 
const convert = document.getElementById("convert"); 
const result = document.getElementById("result"); 
const amount = document.getElementById("amount"); 
 
convert.addEventListener("click",function() 
{ 
    let fromCurrency = from.value; 
    let toCurrency = to.value; 
    let amt = amount.value; 
    fetch(`https://v6.exchangerateapi.com/v6/0d63f897021b98dccda2f39b/latest/${fromCurrency}`) 
    .then(res=> res.json()) 
    .then(data=> 
    { 
        let rate = data.conversion_rates[toCurrency]; 
        let total = rate*amt; 
        result.innerHTML = "Result Amount : " + total; 
        console.log(total); 
    }); 
}); 