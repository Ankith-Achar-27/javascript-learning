let calculation = '';
calculation = JSON.parse(localStorage.getItem('calculation')) || '';

function updateCalculation(value) {
    calculation += value;
    console.log(calculation);
    localStorage.setItem('calculation', JSON.stringify(calculation));
}
