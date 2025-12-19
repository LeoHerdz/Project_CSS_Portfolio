// addNumber function
let newNum = true;
let operator = '';
let firstNum = '';
function addNumber(num){
    console.log(num)
 let display = document.getElementById('display');
 if(newNum){
    display.value=num;
    newNum=false;
 }
 else{
    display.value= display.value + num;
 }
}

function addOperator(op){
    let display = document.getElementById('display');
    firstNum = display.value;
    console.log(firstNum);
    operator = op;
    display.value = firstNum + operator;
    newNum=true;
}

function calculate(){
    let display = document.getElementById('display')
    let result;
    let num1 = Number(firstNum)
    let num2 = Number(display.value)
    

    if(operator=== '+'){
        result = num1 + num2
    } else if(operator === '-'){
        result = num1 - num2;
    }else if( operator=== '*'){
        result = num1 * num2;
    }else if(operator === '/'){
        result = num2!== 0 ? num1/num2: 'Error'
    }else{
        return
    }

    display.value=result;
    firstNum='';
    operator='';
    newNum=true;
}


function clearDisplay(){
    document.getElementById('display').value='';
    firstNum= '';
    operator='';
    newNum=true;
}