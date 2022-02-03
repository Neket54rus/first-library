import './lib/lib'

$('.btn').click(function () {
	$('.main').toggleClass('active')
	console.log($(this))
})