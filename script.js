const data = document.querySelectorAll('.text-input');
const btn = document.querySelector('.btn-sb');
const form = document.querySelector('.wrapper');
const modal = document.querySelector('.success-block');

btn.addEventListener('click', (e) => {
	console.log(getData())
	e.preventDefault();
})

function getData() {
	
	if (data[0].value != '' && data[1] != '' && data[2] != '' && document.querySelector('.checkbox').checked == true) {
		let dataObj = {
			name: data[0].value,
			phone: data[1].value,
			mail: data[2].value,
		}
	
		form.classList.remove('wrapper-show');
		modal.classList.add('success-show');
	
		return JSON.stringify(dataObj);
	} else {
		for (let i = 0; i < data.length; i++) {
			if (data[i].value == '') {
				data[i].style = 'border-bottom: 2px solid red';
			}
		}
	}
}

// function resetForms () {
// 	for (let i = 0; i < data.length; i++) {
// 		data[i].value = '';
// 	}
// 	document.querySelector('.checkbox').checked = false;
// }