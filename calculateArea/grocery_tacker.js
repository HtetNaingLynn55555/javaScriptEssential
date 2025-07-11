function calculateAmount()
{
    console.log('function was call')
    let amount1 = parseFloat(document.getElementById("amount1").value);
    let amount2 = parseFloat(document.getElementById("amount2").value);
    let amount3 = parseFloat(document.getElementById("amount3").value);
    
    let result =  amount1 + amount2 + amount3;

    document.getElementById('result').innerText = `The total amount  is: ${result}`;
}