var button = document.getElementById('my-button')

function sortText(text) {
	return text.split('').sort().join('');
}

button.addEventListener('click', function(){

var inputEl = document.getElementById('input')

var name = inputEl.value;

var newName = sortText(name);

var newText = "Top of the mornin' " + newName + "!";

var heading = document.getElementById('output');

heading.innerText = newText;
})
