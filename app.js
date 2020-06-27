
function getNumber(num){
var calculate = document.getElementById("calculate");
calculate.value += num;
}

function clearResult(){
    var result = document.getElementById("result");
    calculate.value = "";
    result.value = "0";
}

function getResult(){
    var result = document.getElementById("result");
    result.value = eval(calculate.value);
}

function squareRoot(){
    var result = document.getElementById("result");
    result.value = Math.sqrt(calculate.value);

}

function getpi(){
    var result = document.getElementById("result");
    calculate.value += Math.PI;
    result.value = calculate.value;
}


function percentage(){
    var result = document.getElementById("result");
    calculate.value = (calculate.value/100);
    result.value = calculate.value;
}

function getexponent(){
    var result = document.getElementById("result");
calculate.value = Math.exp(calculate.value);
result.value = calculate.value;
}


function getlogarithm(){
    var result = document.getElementById("result");
    calculate.value = Math.log(calculate.value);
}


function getpower(){
    var result = document.getElementById("result");
    calculate.value = Math.pow(num,num);
}

function back() {
    var result = document.getElementById("result");
    calculate.value = calculate.value.substr(0, calculate.value.length*1 - 1);
}