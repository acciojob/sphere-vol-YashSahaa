let rad = document.getElementById('radius')
let vol = document.getElementById('volume')

function volume_sphere(event_details) {
    //Write your code here
  event_details.preventDefault();
	let radius = rad.value
	vol.value = (4/3)*3.14*Math.pow(radius,3)
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
