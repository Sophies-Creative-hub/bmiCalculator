// In Ihrem JavaScript-Code (main.js)
Array.from(document.getElementsByTagName('input')).forEach(element => {
    element.addEventListener('change', updateUI);
});

document.getElementById('calculateButton').addEventListener('click', calculateAndDisplay);

function updateUI() {
    // Logik zur Aktualisierung des UI hier
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    const bmi = calculateBMI(weight, height);
    console.log("weight: %s, height: %s, bmi: %s", weight, height, bmi);
}

function calculateAndDisplay() {
    // Logik zur Aktualisierung des UI hier
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    if (weight && height) {
        const bmi = calculateBMI(weight, height);
        displayResults(bmi);  // Pass only the BMI value to displayResults
    } else {
        alert('Bitte geben Sie Gewicht und Größe ein.');
    }
}

function calculateBMI(weight, height) {
    // Logik zur Berechnung des BMI hier
    const heightInMeters = height / 100; // Umrechnung von Zentimetern in Meter
    const bmi = Math.round(weight / (heightInMeters * heightInMeters));
    return bmi;
}

function displayResults(bmi) {
    document.getElementById('result').innerText = `BMI: ${bmi}`;
}

