const form = document.querySelector('form')



form.addEventListener('submit', function(a){
	a.preventDefault(); 	// stops the usual action, and lets u get the data and process it
	const height= parseInt(document.querySelector("#height").value)
	console.log(height);
	const weight= parseInt(document.querySelector("#weight").value)
	console.log(weight);
	const res= document.querySelector("#results")
	console.log(res);

	if(height==='' || height<0 || isNaN(height)){
		res.innerHTML= `Please give a valid height ${height}`;
	}
	else if(height==='' || weight<0 || isNaN(weight)){
		res.innerHTML = `PLease give a valid weight ${weight}`;
	}
	else{
		const bmi = (weight/((height*height)/1000)).toFixed(2);
		res.innerHTML = `<span> Your BMI : ${bmi}</span>`;
	}
});






















































