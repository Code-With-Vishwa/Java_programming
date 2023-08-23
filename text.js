
const Image_card = document.querySelector(".Image_card");
const arrowBtn = document.querySelectorAll(".wrapper-1 i");
const firstCardWidth = Image_card.querySelector(".card").offsetWidth;

let isDragging = false, startX, startScrollLeft;
arrowBtn.forEach(btn => {
	btn.addEventListener("click", () => {
		Image_card.scrollLeft += btn.id === "left" ? - firstCardWidth : firstCardWidth;
	})
})

const dragStart = (e) => {
	isDragging = true;
	Image_card.classList.add("dragging");
	// Records the initial cursor and scroll position of the carousel
	startX = e.pageX;
	startScrollLeft = Image_card.scrollLeft;
}

const dragging = (e) =>  // if isDragging is false return from here
{
	if (!isDragging) return;
	Image_card.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
	isDragging = false;
	Image_card.classList.remove("dragging");
}

Image_card.addEventListener("mousedown", dragStart);
Image_card.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);

// Email vaildation

function checkUpper(str) {
	let flag = false;
	for (var i = 0; i < str.length; i++) {
		if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
			flag = true;
			break;
		}
	}
	return flag;
}
function validateEmail(str) {
	let status = checkUpper(str);
	if (status == true) {
		document.getElementById("s").innerHTML = "Capital element not allowed";
		document.getElementById("s").style.color = "red";
	}
	else {
		let index = str.indexOf("@");
		if (index <= 0) {
			document.getElementById("s").innerHTML = "invalid email address";
			document.getElementById("s").style.color = "red";
		}
		else {
			let substr = str.substring(index, str.length);
			let ind = substr.indexOf(".");
			let count = 0;
			for (let i = 0; i < str.length; i++) {
				if (str.charAt(i) == '@') {
					++count;
				}
			}
			if (((substr.substring(ind, substr.length).length == 4) || substr.substring(ind, substr.length).length == 3) && count == 1) {
				document.getElementById("s").innerHTML = "";
			}
			else {
				document.getElementById("s").innerHTML = "invalid email address";
				document.getElementById("s").style.color = "red";
			}
		}
	}
}


function show() {
	alert("Go");
}

var count = 1;
var countEl = document.getElementById("count");
function plus() {
	count++;
	countEl.value = count;
}
function minus() {
	if (count > 1) {
		count--;
		countEl.value = count;
	}
}

// scrollReveal

ScrollReveal({
	reset: true,
	distance: '60px',
	duration: 2500,
	delay: 400
	});

ScrollReveal().reveal('.i-am', { delay: 300 });
ScrollReveal().reveal('.iner', { delay: 300, origin: 'bottom'});
ScrollReveal().reveal('.right_box', { delay: 300, origin: 'bottom'});
ScrollReveal().reveal('.show-animate', { delay: 300, origin: 'bottom'});
ScrollReveal().reveal('.UI-2', { delay: 600, origin: 'bottom'});
ScrollReveal().reveal('.UI-3', { delay: 800, origin: 'bottom'});
ScrollReveal().reveal('.MyExp', { delay: 300, origin: 'bottom'});
ScrollReveal().reveal('.back-circle', { delay: 300, origin: 'left'});
ScrollReveal().reveal('.why-hire', { delay: 300, origin: 'bottom'});
ScrollReveal().reveal('.lets', { delay: 300, origin: 'left'});
ScrollReveal().reveal('.Image_card', { delay: 300, origin: 'bottom'});
ScrollReveal().reveal('.Idea-s', { delay: 300, origin: 'bottom'});
ScrollReveal().reveal('.Lets_h', { delay: 300, origin: 'left'});
ScrollReveal().reveal('.Lets', { delay: 300, origin: 'bottom'});
ScrollReveal().reveal('.A1', { delay: 300, origin: 'bottom'});
ScrollReveal().reveal('.A2', { delay: 400, origin: 'bottom'});
ScrollReveal().reveal('.A3', { delay: 600, origin: 'bottom'});
ScrollReveal().reveal('.Social', { delay: 400, origin: 'bottom'});