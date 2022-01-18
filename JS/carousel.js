let carouselIndex = 1;
showSlides(carouselIndex);

function plusSlides(n) {
  showSlides(carouselIndex += n);
}

function currentSlide(n) {
  showSlides(carouselIndex = n);
}

function showSlides(n) {
  let i;
  let carousel = document.getElementsByClassName("carousel");
  let indicator = document.getElementsByClassName("carousel__indicator");
  if (n > carousel.length) {carouselIndex = 1}
  if (n < 1) {carouselIndex = carousel.length}

  for (i = 0; i < carousel.length; i++) {
    carousel[i].style.display = "none";
  }
  for (i = 0; i < indicator.length; i++) {
    indicator[i].className = indicator[i].className.replace(" active", "");
  }
  carousel[carouselIndex-1].style.display = "block";
  indicator[carouselIndex-1].className += " active";
}