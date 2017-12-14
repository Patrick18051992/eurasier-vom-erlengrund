var number_of_slides = document.getElementsByClassName("slides");
var current_slide_index = document.getElementById("slideshow-container").children(':visible').index();

function display() {
  number_of_slides.hide();
  number_of_slides[current_slide_index].show();
}

function next(){
  if (current_slide_index == number_of_slides[-1]) {
    current_slide_index = 0;
  }
  else {
    current_slide_index += 1;
  }
  display();
}

function previous() {
  if(current_slide_index == 0) {
    current_slide_index = number_of_slides[-1];
  }
  else {
    current_slide_index -1;
  }
  display();
}


