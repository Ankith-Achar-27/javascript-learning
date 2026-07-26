let calculation = JSON.parse(localStorage.getItem('calculation')) || '';

const disp = document.querySelector('.displaySolution');
disp.innerHTML = calculation;

function updateCalculation(value) {
    calculation += value;
    disp.innerHTML = calculation;
    localStorage.setItem('calculation', JSON.stringify(calculation));
}

function evaluation(){
    // Note: eval() takes a string and runs it as code.
    // Avoid using eval() in real world projects since
    // it can potentially be given harmful code to run.
     // Only use eval() for learning purposes.
    calculation = eval(calculation).toString();
    disp.innerHTML = calculation;
    localStorage.setItem('calculation', JSON.stringify(calculation));
}

function onClear(){
    calculation='';
    disp.innerHTML = '';
    localStorage.removeItem('calculation');

}
