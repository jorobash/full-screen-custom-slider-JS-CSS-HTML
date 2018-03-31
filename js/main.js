let sliderImages = document.querySelectorAll('.slide'),
	arrowLeft = document.querySelector('#arrow-left'),
	arrowRight = document.querySelector('#arrow-right'),
	current = 0;

	// Clear all images

	function reset(){
		for(let i = 0; i < sliderImages.length; i++){
			sliderImages[i].style.display = 'none';
		}
	}
	

	// Init slide
	function sliderStart(){
		reset();
		sliderImages[0].style.display = 'block';
	}

	// Show prev imgage
	function slideLeft(){
		reset();
		sliderImages[current - 1].style.display = 'block';
		current--;
		console.log(sliderImages[current - 1]);
	}

	// left arrow click
	arrowLeft.addEventListener('click', () => {
		if(current === 0){
			current = sliderImages.length;
		}
		slideLeft();
	});

	// Show next image
	function slideRight(){
		reset();
		sliderImages[current + 1].style.display = 'block';
		current++;
	}

	// right arrow click
	arrowRight.addEventListener('click', () => {
		if(current === sliderImages.length - 1){
			current = -1;
		}
		slideRight();
	});

	sliderStart();