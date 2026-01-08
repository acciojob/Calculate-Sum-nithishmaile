//your JS code here. If required.
const num1=document.getElementById("n1")
const num2=document.getElementById("n2")
const button=document.getElementById("sum_btn")
const para=document.getElementById("sum")

function calculateSum(){
	para.textContent=`${parseInt(num1.value)+parseInt(num2.value)}`;
}

button.addEventListener("click",calculateSum)
