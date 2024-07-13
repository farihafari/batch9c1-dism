let inputVal = document.querySelector("#result");
let numbers = (n)=>inputVal.value+=n;
let operators = op => inputVal.value+=op;
let calculation = ()=>{
    let calResult = eval(inputVal.value);
    inputVal.value=calResult;
}
let clearAll = ()=>inputVal.value="";
let del = ()=>{
    let strings = inputVal.value;
    strings = strings.splice(0,-1)
}