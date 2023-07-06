


let $body,
	windowHeight,
	windowWidth,
	degree = 0.0174532925,
	mediaPoint1 = 1024,
	mediaPoint2 = 768,
	mediaPoint3 = 480,
	mediaPoint4 = 320,
	devStatus = window.productionStatus === 'development';
	const win = document.body

$(document).ready(function ($) {
	$body = $('body');
});

$(window).on('load', function () {
	updateSizes();
	loadFunc();
	showMoreText();
});

$(window).on('resize', function () {
	resizeFunc();
});

$(window).on('scroll', function () {
	scrollFunc();
});

function loadFunc() {
	calcViewportHeight();
}

function resizeFunc() {
	updateSizes();

	calcViewportHeight();
}

function scrollFunc() {}

function calcViewportHeight() {
	if (isMobile.apple.phone || isMobile.android.phone || isMobile.seven_inch) {
		var vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', vh + 'px');
	}
}

function updateSizes() {
	windowWidth = window.innerWidth;
	windowHeight = window.innerHeight;
}

if ('objectFit' in document.documentElement.style === false) {
	document.addEventListener('DOMContentLoaded', function () {
		Array.prototype.forEach.call(
			document.querySelectorAll('img[data-object-fit]'),
			function (image) {
				(image.runtimeStyle || image.style).background =
					'url("' +
					image.src +
					'") no-repeat 50%/' +
					(image.currentStyle
						? image.currentStyle['object-fit']
						: image.getAttribute('data-object-fit'));

				image.src =
					"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='" +
					image.width +
					"' height='" +
					image.height +
					"'%3E%3C/svg%3E";
			}
		);
	});
}

function succes(success) {
	$(success).toggleClass('active');
		setTimeout(function() {
			$(success).removeClass('active')
		}, 3000)
}

function failed(failed) {
	$(failed).toggleClass('active');
		setTimeout(function() {
			$(failed).removeClass('active')
		}, 3000)
}

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function getRandom(min, max) {
	return Math.random() * (max - min) + min;
}


$(document).ready(function() {
	const btns = document.querySelectorAll('.btn')

	btns.forEach(el => {
			el.addEventListener('click', function(e) {
					let
							size = Math.max(this.offsetWidth, this.offsetHeight),
							x = e.offsetX - size / 2,
							y = e.offsetY - size / 2,
							wave = this.querySelector('.wave')
	
					// Create an element if it doesn't exist
					if (!wave) {
							wave = document.createElement('span')
							wave.className = 'wave'
					}
					wave.style.cssText = `width:${size}px;height:${size}px;top:${y}px;left:${x}px`
					this.appendChild(wave)
			})
	})
})



$(document).ready(function()  {

	var inputsTel = document.querySelectorAll('input[type="tel"]');
	Inputmask({
		"mask": "+7 (999) 999-99-99",
		showMaskOnHover: false
	}).mask(inputsTel);
})




function showMoreText() {
  let showMoreBlock = document.querySelectorAll('.showMoreBlock')
  Array.from(showMoreBlock).map((item) => {
    let showMoreBtn = item.querySelector('.showMoreBtn')
    let showMoreTxt = item.querySelector('.showMoreTxt')

    showMoreBtn.addEventListener('click', function() {
      showMoreTxt.classList.toggle('visible')
      if (showMoreTxt.classList.contains('visible')) {
        this.innerHTML = `
					<div class="reviews_btn_more showMoreBtn active_more_btn"> 
						<p>Свернуть</p>
						<svg class="icon icon-arrowbottom ">
							<use xlink:href="i/sprite/sprite.svg#arrowbottom"></use>
						</svg>
					</div>
        `
      } else {
        this.innerHTML = `
        	<div class="reviews_btn_more showMoreBtn"> 
						<p>Показать больше</p>
						<svg class="icon icon-arrowbottom ">
							<use xlink:href="i/sprite/sprite.svg#arrowbottom"></use>
						</svg>
					</div>
        `;
      }
    })
  })
}


const swiper = new Swiper('.swiper', {
	breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 50,
			freeMode: false,
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 50,
			freeMode: false,
    },
    640: {
      slidesPerView: 5,
      spaceBetween: 30
    }
	},
	navigation: {
    nextEl: '.certificate_slider_btn_next',
    prevEl: '.certificate_slider_btn_prewios',
  },
});


const swiper_rev = new Swiper('.swiper_rev', {
	breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 50,
			freeMode: false,
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 50,
			freeMode: false,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 50
    }
	},
	navigation: {
    nextEl: '.reviews_slider_btn_next',
    prevEl: '.reviews_slider_btn_prewios ',
  },
});