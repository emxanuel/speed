/*---------------------------------------------------------------------
	File Name: custom.js
---------------------------------------------------------------------*/

$(function () {

	"use strict";

	/* Preloader
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	setTimeout(function () {
		$('.loader_bg').fadeToggle();
	}, 1500);

	/* JQuery Menu
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(document).ready(function () {
		$('header nav').meanmenu();
	});

	/* Tooltip
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(document).ready(function () {
		$('[data-toggle="tooltip"]').tooltip();
	});

	/* sticky
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(document).ready(function () {
		$(".sticky-wrapper-header").sticky({ topSpacing: 0 });
	});

	/* Mouseover
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(document).ready(function () {
		$(".main-menu ul li.megamenu").mouseover(function () {
			if (!$(this).parent().hasClass("#wrapper")) {
				$("#wrapper").addClass('overlay');
			}
		});
		$(".main-menu ul li.megamenu").mouseleave(function () {
			$("#wrapper").removeClass('overlay');
		});
	});

	/* NiceScroll
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(".brand-box").niceScroll({
		cursorcolor: "#9b9b9c",
	});

	/* NiceSelect
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(document).ready(function () {
		$('select').niceSelect();
	});

	/* OwlCarousel - Blog Post slider
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(document).ready(function () {
		var owl = $('.carousel-slider-post');
		owl.owlCarousel({
			items: 1,
			loop: true,
			margin: 10,
			autoplay: true,
			autoplayTimeout: 3000,
			autoplayHoverPause: true
		});
	});

	/* OwlCarousel - Banner Rotator Slider
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(document).ready(function () {
		var owl = $('.banner-rotator-slider');
		owl.owlCarousel({
			items: 1,
			loop: true,
			margin: 10,
			nav: true,
			dots: false,
			navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
			autoplay: true,
			autoplayTimeout: 3000,
			autoplayHoverPause: true
		});
	});

	/* OwlCarousel - Product Slider
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(document).ready(function () {
		var owl = $('#product-in-slider');
		owl.owlCarousel({
			loop: true,
			nav: true,
			margin: 10,
			navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 2
				},
				960: {
					items: 3
				},
				1200: {
					items: 4
				}
			}
		});
		owl.on('mousewheel', '.owl-stage', function (e) {
			if (e.deltaY > 0) {
				owl.trigger('next.owl');
			} else {
				owl.trigger('prev.owl');
			}
			e.preventDefault();
		});
	});




	/* Scroll to Top
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(window).on('scroll', function () {
		scroll = $(window).scrollTop();
		if (scroll >= 100) {
			$("#back-to-top").addClass('b-show_scrollBut')
		} else {
			$("#back-to-top").removeClass('b-show_scrollBut')
		}
	});
	$("#back-to-top").on("click", function () {
		$('body,html').animate({
			scrollTop: 0
		}, 1000);
	});

	/* Contact-form
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	$.validator.setDefaults({
		submitHandler: function () {
			alert("submitted!");
		}
	});

	$(document).ready(function () {
		$("#contact-form").validate({
			rules: {
				firstname: "required",
				email: {
					required: true,
					email: true
				},
				lastname: "required",
				message: "required",
				agree: "required"
			},
			messages: {
				firstname: "Please enter your firstname",
				email: "Please enter a valid email address",
				lastname: "Please enter your lastname",
				username: {
					required: "Please enter a username",
					minlength: "Your username must consist of at least 2 characters"
				},
				message: "Please enter your Message",
				agree: "Please accept our policy"
			},
			errorElement: "div",
			errorPlacement: function (error, element) {
				// Add the `help-block` class to the error element
				error.addClass("help-block");

				if (element.prop("type") === "checkbox") {
					error.insertAfter(element.parent("input"));
				} else {
					error.insertAfter(element);
				}
			},
			highlight: function (element, errorClass, validClass) {
				$(element).parents(".col-md-4, .col-md-12").addClass("has-error").removeClass("has-success");
			},
			unhighlight: function (element, errorClass, validClass) {
				$(element).parents(".col-md-4, .col-md-12").addClass("has-success").removeClass("has-error");
			}
		});
	});

	/* heroslider
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	var swiper = new Swiper('.heroslider', {
		spaceBetween: 30,
		centeredSlides: true,
		slidesPerView: 'auto',
		paginationClickable: true,
		loop: true,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
			dynamicBullets: true
		},
	});


	/* Product Filters
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	var swiper = new Swiper('.swiper-product-filters', {
		slidesPerView: 3,
		slidesPerColumn: 2,
		spaceBetween: 30,
		breakpoints: {
			1024: {
				slidesPerView: 3,
				spaceBetween: 30,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 30,
				slidesPerColumn: 1,
			},
			640: {
				slidesPerView: 2,
				spaceBetween: 20,
				slidesPerColumn: 1,
			},
			480: {
				slidesPerView: 1,
				spaceBetween: 10,
				slidesPerColumn: 1,
			}
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
			dynamicBullets: true
		}
	});

	/* Countdown
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$('[data-countdown]').each(function () {
		var $this = $(this),
			finalDate = $(this).data('countdown');
		$this.countdown(finalDate, function (event) {
			var $this = $(this).html(event.strftime(''
				+ '<div class="time-bar"><span class="time-box">%w</span> <span class="line-b">weeks</span></div> '
				+ '<div class="time-bar"><span class="time-box">%d</span> <span class="line-b">days</span></div> '
				+ '<div class="time-bar"><span class="time-box">%H</span> <span class="line-b">hr</span></div> '
				+ '<div class="time-bar"><span class="time-box">%M</span> <span class="line-b">min</span></div> '
				+ '<div class="time-bar"><span class="time-box">%S</span> <span class="line-b">sec</span></div>'));
		});
	});

	/* Deal Slider
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$('.deal-slider').slick({
		dots: false,
		infinite: false,
		prevArrow: '.previous-deal',
		nextArrow: '.next-deal',
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
		infinite: false,
		responsive: [{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 2,
				infinite: true,
				dots: false
			}
		}, {
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
		}, {
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}]
	});

	/* News Slider
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$('#news-slider').slick({
		dots: false,
		infinite: false,
		prevArrow: '.previous',
		nextArrow: '.next',
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		responsive: [{
			breakpoint: 1024,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				dots: false
			}
		}, {
			breakpoint: 600,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}, {
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}]
	});

	/* Fancybox
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(".fancybox").fancybox({
		maxWidth: 1200,
		maxHeight: 600,
		width: '70%',
		height: '70%',
	});

	/* Toggle sidebar
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(document).ready(function () {
		$('#sidebarCollapse').on('click', function () {
			$('#sidebar').toggleClass('active');
			$(this).toggleClass('active');
		});
	});

	/* Product slider 
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	// optional
	$('#blogCarousel').carousel({
		interval: 5000
	});


});

function seeMore() {
	document.getElementById("see-more").innerHTML = `
	<div class="cycles">
	<div class="see-more-img"><img class="d-block w-100" src="images/our-img-1.png">
		<div class="specs">Bicicleta 1  <br>Aro 12-22<br>$3000</div>
		<button onclick="bicycle1()">Agregar a compra</button>
	</div>
</div>
<div class="cycles">
	<div class="see-more-img"><img class="d-block w-100" src="images/our-img-2.png">
		<div class="specs">Bicicleta 2  <br>Aro 12-24<br>$35499</div>
		<button onclick="bicycle2()">Agregar a compra</button>
	</div>
</div>
<div class="cycles">
	<div class="see-more-img"><img class="d-block w-100" src="images/our-img-3.png">
		<div class="specs">Bicicleta 3  <br>Aro 16-20<br>$19999</div>
		<button onclick="bicycle3()">Agregar a compra</button>
	</div>
</div>
<div class="cycles">
	<div class="see-more-img"><img class="d-block w-100" src="images/our-img-4.png">
		<div class="specs">Bicicleta 4  <br>Aro 18<br>$55999</div>
		<button onclick="bicycle4()">Agregar a compra</button>
	</div>
</div>
<div class="cycles">
	<div class="see-more-img"><img class="d-block w-100" src="images/our-img-5.png">
		<div class="specs">Bicicleta 5 <br>Aro 16-18<br>$30000</div>
		<button onclick="bicycle5()">Agregar a compra</button>
</div>
</div>
<div class="cycles">
	<div class="see-more-img"><img class="d-block w-100" src="images/our-img-6.png">
		<div class="specs">Bicicleta 6 <br>Aro 10-20<br>$8245</div>
		<button onclick="bicycle6()">Agregar a compra</button>
	</div>
</div>
<div class="cycles">
	<div class="see-more-img"><img class="d-block w-100" src="images/img-1.png">
		<div class="specs">Bicicleta 7  <br>Aro 10-16<br>$12900</div>
		<button onclick="bicycle7()">Agregar a compra</button>
	</div>
	
</div>
<div class="cycles">
	<div class="see-more-img"><img class="d-block w-100" src="images/image-2.png">
		<div class="specs">Bicicleta 8 <br>Aro 20<br>$37500</div>
		<button onclick="bicycle8()">Agregar a compra</button>
</div>
</div>
<style>
.seemore_bt{
	display: none;
	transition-duration: 500ms;
}
</style>
</div>
	`
	document.getElementById("seeless").innerHTML +=
		`
		<style>
			#seeless{
				display: flex;
				transition-duration: 500ms;
			}
		</style>
	`
}

function ocultar(){
	document.getElementById("seeless").innerHTML += 
	`
		<style>
			#seeless{
				display: none;
			}
		</style>
	`
}

window.onload = ocultar;

function seeLess(){
	document.getElementById("see-more").innerHTML = "";
	document.getElementById("seeless").innerHTML += `
	<style>
		#seeless{
			display: none;
		}
	</style>
	`;
}
let total = 0;
let producto = [], precio = []
function bicycle1(){
	total += 3000;
	precio.push(3000);
	producto.push("Bicicleta 1");
	alert("Añadido al carrito!")
}
function bicycle2(){
	total += 35499;
	precio.push(35499);
	producto.push("Bicicleta 2");
	alert("Añadido al carrito!")
}
function bicycle3(){
	total += 19999;
	precio.push(19999);
	producto.push("Bicicleta 3");
	alert("Añadido al carrito!")
}
function bicycle4(){
	total += 55999;
	precio.push(55999);
	producto.push("Bicicleta 4");
	alert("Añadido al carrito!")
}
function bicycle5(){
	total += 30000;
	precio.push(30000);
	producto.push("Bicicleta 5");
	alert("Añadido al carrito!")
}
function bicycle6(){
	total += 8245;
	precio.push(8245);
	producto.push("Bicicleta 6");
	alert("Añadido al carrito!")
}
function bicycle7(){
	total += 12900;
	precio.push(12900);
	producto.push("Bicicleta 7");
	alert("Añadido al carrito!")
}
function bicycle8(){
	total += 37500;
	precio.push(37500);
	producto.push("Bicicleta 8");
	alert("Añadido al carrito!")
}
const formatoPeso = new Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'USD',
	minimumFractionDigits: 0
})

function carrito(){
	document.getElementById("contenidoCompra").innerHTML = 
	`
		<a href="#">X</a>
		<style>
			#title-compra{
				text-align: center;
			}
		</style>
		<h1 id="title-compra">Tu compra</h1>
	`
	for (let i = 0; i < precio.length; i++){
		document.getElementById("contenidoCompra").innerHTML +=
		`
			<p>${producto[i]} ${formatoPeso.format(precio[i])}</p>
		` 
	}
	document.getElementById("contenidoCompra").innerHTML +=
	`
		<p>Total: ${formatoPeso.format(total)}</p>
	`
}