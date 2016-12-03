const a = document.getElementById('input1');
const b = document.getElementById('input2');
const c = document.getElementById('ranOutput');

const btnCalculate = document.getElementById('calculate');
btnCalculate.addEventListener('click', myFunction);


document.getElementById("reset").onclick = function() {
  a.value  =""; b.value  =""; c.innerHTML  ="";
}

function myFunction() {
 
  if(isNaN(a.value)|| isNaN(b.value)){
	c.innerHTML = "Enter Number value";
	c.style.color = "red";
  }
  else if(a.value ==="" || b.value===""){
	c.innerHTML = "";
  }
  else if(a.value >= b.value){
	c.innerHTML = "Num 2 should be high";
  }
  else{
	var input1=Math.floor(Math.random()*(b.value - a.value))+1; 
	var input2=Math.floor(Math.random()*(b.value - a.value))+1;
	c.innerHTML = (input1+' '+input2);
	console.log(c);
  }
 
}