$(document).ready(function() {
	$('#btnDelete').click(deleteTown)
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
