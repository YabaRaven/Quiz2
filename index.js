
let button = document.getElementById('button');
button.addEventListener('click', calc);

function calc(){

    let operator = document.getElementById("operator").value;
    let firstNum = document.getElementById("firstNum").value;
    let secNum = document.getElementById("secNum").value;

    firstNum = Number(firstNum);
    secNum = Number(secNum);

    switch(operator){
        case '+':
            document.getElementById("answer").innerHTML = firstNum + secNum;
            break;
        case '-':
            document.getElementById("answer").innerHTML = firstNum - secNum;
            break;
        case '*':
            document.getElementById("answer").innerHTML = firstNum * secNum;
            break;
        default:
            document.getElementById("answer").innerHTML = "Invalid Input";
    }
}