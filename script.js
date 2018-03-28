function main() {
	document.getElementById('load').addEventListener('click', function (e) {
		let url = document.getElementById('image-url').value;
		if(url) {
			document.getElementById('image').src = url;
		}
	}, false);

	document.getElementById('change-background').addEventListener('click', function (e) {
		let color = document.getElementById('color').value;
		if(color) {
			document.getElementById('b').style.backgroundColor = color;
			document.getElementById('c').style.backgroundColor = color;
			document.getElementById('d').style.backgroundColor = color;
		}
	}, false);

	document.getElementById('rotate').addEventListener('click', function (e) {
		let rotation = document.getElementById('rotation').value;
		if(color) {
			document.getElementById('image').style.transform = `rotate(${rotation}deg)`;
		}
	}, false);
}

function autorun() {
	main();
}
if (window.addEventListener) {
	window.addEventListener('load', autorun, false);
} else if (window.attachEvent) {
	window.attachEvent('onload', autorun);
} else {
	window.onload = autorun;
}
