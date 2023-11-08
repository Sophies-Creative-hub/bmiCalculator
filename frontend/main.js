function calculateBMI() {
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    const bmi = weight / ((height / 100) ** 2); // BMI calculation formula
    updateUI(bmi);
}

function updateUI(bmi) {
    const result = document.getElementById('result');
    result.innerHTML = `Dein BMI ist ${bmi.toFixed(2)}.`;
}

export { calculateBMI };
