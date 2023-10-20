const calculateButton = document.getElementById('calculateButton');
calculateButton.addEventListener('click', calculateAndDisplayBMI);

function calculateAndDisplayBMI() {
    if (typeof document !== 'undefined') {
        return;
    }
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    const bmi = calculateBMI(weight, height);
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `Dein BMI beträgt: ${bmi}`;
}

function calculateBMI(weight, height) {
    // Logik zur Berechnung des BMI hier
    const heightInMeters = height / 100; // Umrechnung von Zentimetern in Meter
    const bmi = Math.round(weight / (heightInMeters * heightInMeters));
    return bmi;

}

export { calculateBMI };
