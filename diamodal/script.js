// Dialog element
function $(modal) {
	return document.querySelector(modal);
	}

var main = $('main'); // main html tag

// DiaModal items
var dmItem1 = $('.diamodal-item-1');
var dmItem2 = $('.diamodal-item-2');
var dmItem3 = $('.diamodal-item-3');
var dmItem4 = $('.diamodal-item-4');

// Item 1

$('.diamodal-item-1-btn').onclick = function() {
	dmItem1.setAttribute('open', '');
	main.classList.add('bgdown');
}

dmItem1.onclick = function() {
	if (dmItem1.close) {
		dmItem1.close();
	}
	else {
		dmItem1.removeAttribute('open');
	}
	main.classList.remove('bgdown');
}

// Item 2

$('.diamodal-item-2-btn').onclick = function() {
	dmItem2.setAttribute('open', '');
	main.classList.add('bgdown');
}

dmItem2.onclick = function() {
	if (dmItem2.close) {
		dmItem2.close();
	}
	else {
		dmItem2.removeAttribute('open');
	}
	main.classList.remove('bgdown');
}

// Item 3

$('.diamodal-item-3-btn').onclick = function() {
	dmItem3.setAttribute('open', '');
	main.classList.add('bgdown');
}

dmItem3.onclick = function() {
	if (dmItem3.close) {
		dmItem3.close();
	}
	else {
		dmItem3.removeAttribute('open');
	}
	main.classList.remove('bgdown');
}

// Item 4

$('.diamodal-item-4-btn').onclick = function() {
	dmItem4.setAttribute('open', '');
	main.classList.add('bgdown');
}

dmItem4.onclick = function() {
	if (dmItem4.close) {
		dmItem4.close();
	}
	else {
		dmItem4.removeAttribute('open');
	}
	main.classList.remove('bgdown');
}