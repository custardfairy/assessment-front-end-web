const colorBtn = document.querySelector('#color')
const placeBtn = document.querySelector('#place')
const ritualBtn = document.querySelector('#ritual')


function colorAlert() {
	alert("Green like grass, limes, clover, and unripe bananas")
}

function placeAlert(){
	alert("A deserted art museum")
}

function ritualAlert() {
	alert("Doodling the Day")
}

colorBtn.addEventListener('click', colorAlert)
ritualBtn.addEventListener('click', ritualAlert)
placeBtn.addEventListener('click', placeAlert)