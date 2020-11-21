function calc(type){

var number1 = Number(document.getElementById('num1').value);
var number2 = Number(document.getElementById('num2').value);

if (type=="add"){
  document.getElementById('output').innerHTML= number1 + number2
}

else if (type=="subtract"){
  document.getElementById('output').innerHTML= number1 - number2
}


else if (type=="multiply"){
  document.getElementById('output').innerHTML= number1 * number2
}

else if (type=="divide"){
  document.getElementById('output').innerHTML= number1 / number2
}

}
