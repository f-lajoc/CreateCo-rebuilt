// page loader

let loader = document.getElementById("loader-wrapper");
let contentWrapper = document.getElementById("content-wrapper");

// Remove blur when the page is loaded
window.addEventListener("load", function () {
	loader.style.display = "none";
	contentWrapper.classList.remove("blur-content");
});
