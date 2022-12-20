const firstValueInput = document.getElementById('first_value');
const secondValueInput = document.getElementById('second_value');
const operatorSelect = document.getElementById(('operator'));
const resCalcSpan = document.getElementById('res calc');

function getNumber(x){
    if(x == ''){
        return undefined;
    }
    const numX = +x;
    if(isNaN(numX)){
        return undefined;
    }else{
        return numX;
    }
}

console.log('This Line 17 happend');
function calc() {
    const val1 = firstValueInput.value;
    console.log('This line 20 happend');
    const val2 =secondValueInput.value;
 const num1 = getNumber(val1);
 const num2 = getNumber(val2);
 if (!num1 ===undefined){
     alert('Wrong num1');
     return;
 }
 if (num2 === undefined){
     alert('Wrong number 2')
     return;;
 }
 const operator = operatorSelect.value
 switch (operator){
     case'+':
         resCalcSpan.innerHTML = '<b>'+(num1+num2)+'</b>';
         break;
 }
}

