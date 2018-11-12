var menuBar = document.querySelector(".menu-bar");
var topMenu = document.querySelector(".top-menu");
var fadeEl = document.querySelectorAll(".fade-el");

menuBar.addEventListener("click", () => {
	menuBar.classList.toggle("open");
	topMenu.classList.toggle("fullscreen");
});

window.addEventListener("scroll", function () {
	for (let i = 0; i < fadeEl.length; i++) {
		let topScreenElPos = fadeEl[i].getBoundingClientRect().top;

		if (topScreenElPos < window.innerHeight * 70 / 100) {
			fadeEl[i].classList.add("show");
		} else {
			fadeEl[i].classList.remove("show");

		}
	}
	var scrollLength = window.outerHeight / 2;
	if (window.innerWidth >= 1024) {
		scrollLength = 0;
	}
	if (window.scrollY > scrollLength) {
		topMenu.classList.add("blacken");
	} else if (window.pageYOffset == 0) {
		topMenu.classList.remove("blacken");
	}
})
