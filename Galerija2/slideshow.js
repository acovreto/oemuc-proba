  // Funkcija za pojke slide shows (ova ojt vo class na main slideshow container)
  showSlides("slideshow1");
  showSlides("slideshow2");
  showSlides("slideshow3");
  showSlides("slideshow4");
  showSlides("slideshow5");

  function showSlides(slideshowClassName) {
    let slideIndex = 0;
    show();

    function show() {
      let i;
      let slides = document.querySelectorAll("." + slideshowClassName + " .mySlides");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) {
        slideIndex = 1;
      }
      slides[slideIndex - 1].style.display = "block";
      setTimeout(show, 4000);
    }
  }