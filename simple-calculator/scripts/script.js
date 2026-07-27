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

function backSpace(){
   let backSpaceElement = calculation.slice(0,-1);
   calculation=backSpaceElement;
   disp.innerHTML = calculation;
   localStorage.removeItem('calculation');
}

function calculatePercentage(){
    console.log('running1');
    const match = calculation.match(/^(\d+\.?\d*)([+\-*/])(\d+\.?\d*)$/);
    console.log(calculation);
    console.log(match);
    if(!match) return;


    const num1 = Number(match[1]);
    console.log(num1);
    const operator = match[2];
    const num2 = Number(match[3]);
    console.log(num2);

    let val;

    if(operator === '+' || operator === '-'){
        val = (num1 * num2) / 100;
    }
    else if(operator === '*'){
        val = num2/100;
    }
    else if(operator === '/'){
        val = num2/100;
    }

    calculation = `${num1}${operator}${val}`;
    evaluation();
}
