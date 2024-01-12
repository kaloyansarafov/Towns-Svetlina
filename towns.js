$(document).ready(function() {
	$('#btnDelete').click(deleteTown);
	$('#btnShuffle').click(shuffleTowns);
	$('#btnAdd').click(addTown)
});

function deleteTown() {
	let townName = $('#townName').val();
	$('#townName').val('');
	let removed = false;
	for (let option of $('#towns option')) {
		if (option.textContent == townName) {
			removed = true;
			option.remove();
		}
	}
	if (removed)
		$('#result').text(townName + " deleted.");
	else
		$('#result').text(townName + " not found.");
}

function shuffleTowns(){
	let towns = document.getElementById('towns');
	//shuffle the towns
	for (let i = towns.options.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		let temp = towns.options[i].text;
		towns.options[i].text = towns.options[j].text;
		towns.options[j].text = temp;
	}
}
function addTown(){
	let townName = $('#townName').val();
	$('#townName').val('');
	let added = false;
	for (let option of $('#towns option')) {
		if (option.textContent == townName) {
			added = true;
			break;
		}
	}
	if (!added) {
		let option = $('<option>');
		option.text(townName);
		$('#towns').append(option);
		$('#result').text(townName + " added.");
	} else {
		$('#result').text(townName + " already exists.");
	}
}
