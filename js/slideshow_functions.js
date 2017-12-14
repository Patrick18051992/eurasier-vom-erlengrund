function nextSlide() {
    if (current_slide_index == (number_of_slides - 1)) {
        current_slide_index = 0;
    } else {
        current_slide_index += 1;
    }
    slideshow.children().hide();
    slideshow.children(':eq(' + current_slide_index + ')').fadeIn('slow');
}

function previousSlide() {
    if (current_slide_index == 0) {
        current_slide_index = (number_of_slides - 1);
    }
    // otherwise decrease by one
    else {
        current_slide_index -= 1;
    }
    slideshow.children().hide();
    slideshow.children(':eq(' + current_slide_index + ')').fadeIn('slow');
}