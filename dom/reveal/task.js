window.addEventListener('scroll', function() {
	const viewportHeight = window.innerHeight;
	const elements = document.querySelectorAll('.reveal');
	
	elements.forEach((el) => {
	  el.getBoundingClientRect().top;
  
	  if (el.getBoundingClientRect().top < viewportHeight) {
		el.classList.add('reveal_active');
	  };
	
	  if (el.getBoundingClientRect().top > viewportHeight || el.getBoundingClientRect().bottom < 0) {
		el.classList.remove('reveal_active');
	  };
	})
	
  });