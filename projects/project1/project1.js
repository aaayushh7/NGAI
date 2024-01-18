window.dataLayer = window.dataLayer || [];
	  function gtag(){dataLayer.push(arguments);}
	  gtag("js", new Date());
	  gtag("config", "G-1JHMFQXCEW");

let items = document.querySelectorAll(".cw-accordion .cw-accordion__item .cw-label");
items.forEach(function (t) {
t.addEventListener("click", function (e) {
 items.forEach(function (e) {
 e !== t || e.classList.contains("cw-open")
 	? e.classList.remove("cw-open")
 	: e.classList.add("cw-open");
 });
});
});