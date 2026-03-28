let fullOp = '';
let res = 0;
let hasOp = false
let opSet = ['+','-','x','/']

function handleClick(number) {
    if (opSet.includes(number) && hasOp==true){
        return;
    }
    else if (opSet.includes(number)){
        hasOp=true;
    }
    
    console.log(number);
    fullOp = fullOp + number;
    showNumber(fullOp);

}


function calculate(){
    console.log({fullOp});
    const [a,op,b] = fullOp.split(/(\+|-|x|\/)/gm);
    console.log({a,op,b});
    switch(op){
        case "+":
            res = Number(a) + Number(b);
            break;

        case "-":
            res = Number(a) - Number(b);
            break;

        case "x":
            res = Number(a) * Number(b);
            break;

        case "/":
            res = Number(a) / Number(b);
            break;

        default:
            res=fullOp;
    }
    fullOp=res;
    hasOp=false;
    showNumber(res);
    fullOp='';

}


function deletear(){
    res = 0;
    fullOp = '';
    showNumber('');
    hasOp = false;
}


function showNumber(number) {
    document.getElementById("screen").innerHTML = number;
}