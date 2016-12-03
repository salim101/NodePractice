const a = document.getElementById('input1');
const b = document.getElementById('input2');
const c = document.getElementById('ranOutput');
const btnCalculate = document.getElementById('calculate');
btnCalculate.addEventListener('click', myFunction);


document.getElementById("reset").onclick = function() {
  a.value  =""; b.value  =""; c.innerHTML  ="";
}

function myFunction() {
	const operators = document.getElementById('operators');
	const operatorValue = operators.options[operators.selectedIndex].value;

	if(isNaN(a.value)|| isNaN(b.value)){
		c.innerHTML = "Enter Number value";
		c.style.color = "red";
	}
	else if(a.value ==="" || b.value===""){
		c.innerHTML = "";
	}
	else if(a.value >= b.value){
		c.innerHTML = "Num 2 should be high";
		c.style.color = "red";
	}
	else{
		let input1=Math.floor(Math.random()*(b.value - a.value))+1; 
		let input2=Math.floor(Math.random()*(b.value - a.value))+1;
		//console.log('input1 before: '+input1 + 'input2 before: '+input2);
		
		if(operatorValue ==='addition'){
			c.innerHTML = (input1+' + '+input2 + ' = '+(input1+input2));
		}
		if(operatorValue ==='subtraction'){
			c.innerHTML = (input1+' - '+input2 + ' = '+(input1-input2));
		}
		if(operatorValue ==='multiplication'){
			c.innerHTML = (input1+' * '+input2 + ' = '+(input1*input2));
		}
		if(operatorValue ==='division'){
			while(input2 < input1){
				input1=Math.floor(Math.random()*(b.value - a.value))+1;
				input2=Math.floor(Math.random()*(b.value - a.value))+1;
			}
			c.innerHTML = (input2+' ÷ '+input1 + ' = '+(input2/input1).toString().match(/^-?\d+(?:\.\d{0|0})?/)[0]);
		}
	
	}
 
}//end myFunction()