window.addEventListener('scroll', function() {
	const viewportHeight = window.innerHeight;
	const element = document.querySelector('.reveal');
	const elementTop = element.getBoundingClientRect().top;
	const elementBottom = element.getBoundingClientRect().bottom;

	if (elementTop < viewportHeight) {
		element.classList.add('reveal_active');
	};

    if (elementTop > viewportHeight || elementBottom < 0) {
		element.classList.remove('reveal_active');
	};
    
});