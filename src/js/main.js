import './lib/lib'

function sayOn() {
	console.log('on');
}
function sayClick() {
	console.log('Click');
}
$('.main').on('click', sayOn)
$('.main').click(sayClick)