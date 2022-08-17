const data = document.querySelectorAll('.text-input');
const btn = document.querySelector('.btn-sb');


btn.addEventListener('click', () => {
	console.log(getData())
})

function getData() {

	let dataObj = {
		name: data[0].value,
		phone: data[1].value,
		mail: data[2].value,
	}
	return JSON.stringify(dataObj);
}

// function resetForms () {
// 	for (let i = 0; i < data.length; i++) {
// 		data[i].value = '';
// 	}
// 	document.querySelector('.checkbox').checked = false;
// }