var slideIndex = 1;

var carouselFuncs = (function() {

  return {
    func1: function() {
      showSlides(1);
    },
    func2: function() {
      plusSlides(-1);
    },
    func3: function() {
      plusSlides(1);
    },
    func4: function() {
      currentSlide(1);
    },
    func5: function() {
      currentSlide(2);
    },
    func6: function() {
      currentSlide(3);
    }
  }
})(carouselFuncs || {})


// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
