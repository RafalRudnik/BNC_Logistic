const burger = document.querySelector('.burger-menu');
const burgerBtn = document.querySelector('.burger');
const burgerXIcon = document.querySelector('.fa-x');
const burgerIcon = document.querySelector('.fa-bars');
const links = document.querySelectorAll('.links');
const homeBtn = document.querySelector('.home-link');
const aboutBtn = document.querySelector('.about-link');
const profileBtn = document.querySelector('.profile-link');
const contactBtn = document.querySelector('.contact-link');
const sendBtn = document.querySelector('.btn');
const okBtn = document.querySelector('.ok-btn');
const form = document.querySelector('form');
const msgConfirm = document.querySelector('.form-send');

const sections = document.querySelectorAll('.sections');

const text = document.querySelector('textarea');
const mail = document.querySelector('#mail');

const burgerOn = () => {
	burger.classList.toggle('burger-on');
	burgerXIcon.classList.toggle('burger-hide');
	burgerIcon.classList.toggle('burger-hide');
};

const linksClassRemove = () => {
	links.forEach((link) => link.classList.remove('link-active'));
};

const homeActive = () => {
	linksClassRemove();
	homeBtn.classList.add('link-active');
};

const aboutActive = () => {
	linksClassRemove();
	aboutBtn.classList.add('link-active');
};

const profileActive = () => {
	linksClassRemove();
	profileBtn.classList.add('link-active');
};

const contactActive = () => {
	linksClassRemove();
	contactBtn.classList.add('link-active');
};

const mailSend = () => {
	form.classList.remove('form-not-send');
	msgConfirm.classList.add('form-send-ok');
};

const backToForm = () => {
	msgConfirm.classList.remove('form-send-ok');
	form.classList.add('form-not-send');
	text.value = '';
	mail.value = '';
};

const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		console.log(entry);
		if (entry.isIntersecting) {
			entry.target.classList.add('show');
		}
		// else { entry.target.classList.remove('show')}
	});
});

burgerBtn.addEventListener('click', burgerOn);
homeBtn.addEventListener('click', homeActive);
aboutBtn.addEventListener('click', aboutActive);
profileBtn.addEventListener('click', profileActive);
contactBtn.addEventListener('click', contactActive);

sendBtn.addEventListener('click', mailSend);
okBtn.addEventListener('click', backToForm);

sections.forEach((el) => observer.observe(el));

let swiper = new Swiper('.mySwiper', {
	effect: 'coverflow',
	grabCursor: true,
	centeredSlides: true,
	slidesPerView: 'auto',
	coverflowEffect: {
		rotate: 15,
		stretch: -40,
		depth: 20,
		modifier: 1,
		slideShadows: false,
	},
	pagination: {
		el: '.swiper-pagination',
	},
});
