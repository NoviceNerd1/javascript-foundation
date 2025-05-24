const clock = document.getElementById('clock')

function updateClock(){
	const now= new Date();
	const time= now.toLocaleTimeString();
	const clock= document.getElementById('clock');
	clock.textContent = time;

	// adding tiny flas classs for each tick
	clock.style.opacity = '0.8';
	setTimeout(()=> clock.style.opacity = '1', 100);
}

setInterval(updateClock, 1000);
updateClock();



//setInterval(function(){
//	let date = new Date();
//	console.log(date);
//	clock.innerHTML = date.toLocaleTimeString();
//}, 1000);
























