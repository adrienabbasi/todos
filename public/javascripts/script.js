// We assign a function to be run when the DOM is ready. This function selects all the checkboxes 
// using tag name 'input', iterates over them and assigns a clickHandler function to be run every 
// time a checkbox is clicked. The clickHandler function will add or remove the 'checked' css class 
// from the span tag (next element sibling) based on whether the checkbox is selected or de-selected.

document.addEventListener("DOMContentLoaded", function(event) { 
	var checkboxes = document.getElementsByTagName('input');
	for (var i = 0; i < checkboxes.length; i++) {
		checkboxes[i].addEventListener('click', clickHandler);
	}
});

function clickHandler() {
	if(this.checked) {
		this.parentNode.className = 'checked';
	} else {
		this.parentNode.className = '';
	}
}



