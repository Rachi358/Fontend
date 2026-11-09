function BMICalculate(){
    var age = parseInt(document.getElementById('age').value);
    var heightCm = parseFloat(document.getElementById("height").value); // Assumes input is in cm
    var weight = parseFloat(document.getElementById("weight").value);

    if (!heightCm || !weight || heightCm <= 0 || weight <= 0) {
        document.getElementById("bmicalculate").innerHTML = "Please enter valid numbers.";
        return;
    }

    var heightMeters = heightCm / 100;

    var bmi = weight/(heightMeters**2);
    document.getElementById("bmicalculate").innerHTML = bmi.toFixed(1);
}