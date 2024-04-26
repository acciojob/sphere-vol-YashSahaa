let rad = document.getElementById('radius')
let vol = document.getElementById('volume')

function volume_sphere(event_details) {
    //Write your code here
  event_details.preventDefault();
	let radius = rad.value
	let volume = (4/3)*Math.PI*Math.pow(radius,3)
	vol.value=volume.toFixed(4)
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
