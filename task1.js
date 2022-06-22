
let operatorSymbol = prompt("Enter the operation you want to perform: + , - , * , / , %");
let numOne = parseInt(prompt("Enter first number"));
let numTwo = parseInt(prompt("Enter the second number"));

let ans;

if (operatorSymbol == "+"){
    ans = numOne + numTwo;
}
else if (operatorSymbol == "-"){
    ans = numOne - numTwo;
}
else if( operatorSymbol == "*"){
    ans = numOne * numTwo;
}
else if (operatorSymbol == "/"){
    ans = numOne / numTwo;
}
else if (operatorSymbol == "%"){
    ans = numOne % numTwo;
}
else{
    ans=null;
    alert("Enter the correct symbol or number");
}

let result = alert("The answer is " + ans);