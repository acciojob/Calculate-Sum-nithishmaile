//your JS code here. If required.
const num1=document.getElementById("n1")
const num2=document.getElementById("n2")
const button=document.getElementById("sum_btn")
const para=document.getElementById("Sum")

function calculateSum(){
	const val1=parseInt(num1.value) || 0
	const val2=parseInt(num2.value) || 0
	para.textContent=`${val1+val2}`;
	num1.value=""
	num2.value=""
}

button.addEventListener("click",calculateSum)
