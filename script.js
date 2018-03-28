function main() {
	console.log('hello');
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
