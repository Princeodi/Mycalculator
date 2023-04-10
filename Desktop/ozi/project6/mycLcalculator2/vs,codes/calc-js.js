const display1E1 = document.querySelector('.display1');
const display2E1 = document.querySelector('.display2');
const tempResultE1 = document.querySelector('.temp-result');
const numbersE1 = document.querySelectorAll('.numbers');
const operatorsE1 = document.querySelectorAll('.operators');
const equalE1 = document.querySelector('.equal');
const allclearE1 = document.querySelector('.all-clear');
const deleteE1 = document.querySelector('.delete');

let dis1Num = '';
let dis2Num = '';
let result = null;
let lastOperators = '';
let haveDot = false;

numbersE1.forEach(numbers => {
    numbers.addEventListener('click', (e)=> {
        if (e.target.innerText ==='.'&& !haveDot){
            haveDot = true;
        }else if(e.target.innerText === '.' && haveDot){
            return;
        }
    dis2Num += e.target.innerText;
    display2E1.innerText = dis2Num;  
    })
})
operatorsE1.forEach(operators => {
    operators.addEventListener('click', (e)=>{
        if(!dis2Num)result;
        haveDot = false;
        const operatorsName = e.target.innerText;
        if(dis1Num && dis2Num && lastOperators){
            mathOperation()
        }else{
                result = parseFloat(dis2Num)
            }
            clearVar(operatorsName);
            lastOperators = operatorsName;
        console.log(result);

    
    })
});

function clearVar(name = ''){
    dis1Num += dis2Num  + '' + name + '';
    display1E1.innerText = dis1Num;
    display2E1.innerText = '';
    dis2Num = '';
    tempResultE1.innerText = result;
}
function mathOperation(){
    if(lastOperators === '*') {
        result = parseFloat(result) * parseFloat(dis2Num);
    }else if ( lastOperators === '+') {
        result = parseFloat(result) + parseFloat(dis2Num);
    }else if ( lastOperators === '-') {
        result = parseFloat(result) - parseFloat(dis2Num);
    }else if ( lastOperators === '/') {
        result = parseFloat(result) / parseFloat(dis2Num);
    }else if ( lastOperators === '%') {
        result = parseFloat(result) % parseFloat(dis2Num);
    }
}
equalE1.addEventListener('click', (e) => {
     if(!dis1Num || !dis2Num) return;
     haveDot = false;
     mathOperation();
     clearVar();
     display2E1.innerText = result;
     tempResultE1.innerText = '';
     dis2Num = result;
     dis1Num = '';
})
allclearE1.addEventListener('click' , (e) =>{
    display1E1.innerText = '0';
    display2E1.innerText = '0';
    dis1Num = '';
    dis2Num = '';
    result = '';
    tempResultE1.innerText = '0';
})
deleteE1.addEventListener('click' , (e) => {
    display2E1.innerText = '';
    dis2Num = '';
})