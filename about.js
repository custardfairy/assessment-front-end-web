function handleSubmit(evt) {
	evt.preventDefault();
	alert (`The form was successfully submitted. Thank you!`);
	
	// console.log('form submit');
}

function giveComp(evt) {
	evt.preventDefault();
	alert (`Giant Duck thinks you're the GOAT!`);
}

let img = document.querySelector(`bigDuck`);

bigDuck.addEventListener(`mouseover`, giveComp);

// const giveComp = () => {
	// alert (`Giant Duck thinks you're the GOAT`);
// }

let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

