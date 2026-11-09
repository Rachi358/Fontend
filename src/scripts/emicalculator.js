function CalculateEMI(){
    var p = parseInt(document.getElementById('txtAmount').value);
    var n = parseInt(document.getElementById('txtYear').value)*12;
    var r = parseFloat(document.getElementById('txtRate').value)/12/100;
    var EMI = p * r * ( Math.pow(1+r, n) /  Math.pow(1+r, n) )-1;
    document.getElementById('lblInstallment').innerHTML = EMI.toLocaleString("en-in", {style:'currency', currency:'INR', minimumFractionDigits:0, maximumFractionDigits:0});
}

function AmountChange(){
    document.getElementById('txtAmount').value = document.getElementById("rangeAmount").value;
    CalculateEMI();
}


function YearChange(){
    document.getElementById("txtYear").value = document.getElementById("rangeYears").value;
    CalculateEMI();
}


function RateChange(){
    document.getElementById("txtRate").value = document.getElementById("rangeRate").value;
    CalculateEMI();
} 