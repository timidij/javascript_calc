// alert("hello world")
var number1 = parseFloat(prompt("enter first number"));
var number2 = parseFloat(prompt("enter first number"));
var opp = prompt("enter operator +, / , * , - ");
var result;


if (opp == "+"){
result = number1 + number2;
 alert( number1 +"+"+ number2 +"=" +result)
}

else if  (opp == "-"){
    result = number1 - number2;
    
    alert( number1 +"-"+ number2 +"=" +result)
}
else if (opp == "*"){
    result = number1 * number2;
    alert( number1 +"*"+ number2 +"=" +result)
}
else if (opp == "/"){
    result = number1 / number2;
     alert( number1 +"/"+ number2 +"=" +result)
}
else{
    alert("opps you entered an invalid operator ");
}
 