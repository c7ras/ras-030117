function addMe(){
	var x = document.getElementById('fn').value;
	var y = document.getElementById('sn').value;;
	var sum= parseInt(x) + parseInt(y);
	var diff= parseInt(x) - parseInt(y);
	var product= parseInt(x) * parseInt(y);
	var qou= parseInt(x) / parseInt(y);
	document.getElementById('sum').innerHTML = "Sum: " +sum;
	document.getElementById('diff').innerHTML = "Difference: " +diff;
	document.getElementById('product').innerHTML = "Product: " +product;
	document.getElementById('qou').innerHTML = "Qoutient: " +qou;
}