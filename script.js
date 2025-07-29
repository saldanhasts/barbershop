    const sections = document.querySelectorAll('.section');
    const revealOnScroll = () => {
      const triggerBottom = window.innerHeight * 0.85;
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if(sectionTop < triggerBottom){
          section.classList.add('visible');
        }
      });
    };
    window.addEventListener('scroll', revealOnScroll);
    window.addEventListener('load', revealOnScroll);

    //scroll parallax
  window.addEventListener('scroll', function() {
    const scrolled = window.scrollY;
    document.querySelector('.parallax-section::before').style.transform = 'translateY(' + (scrolled * -0.2) + 'px)';
  });

  let currentIndex = 0;
  const items = document.querySelectorAll('.carousel-item');
  const totalItems = items.length;

  function showNextItem() {
    items[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % totalItems;
    items[currentIndex].classList.add('active');
  }

    setInterval(showNextItem, 4000); // troca a cada 4 segundos

    let currentSlide = 0;
    const carouselItems = document.querySelectorAll('#servicos-carousel .carousel-item');
    const totalCarouselItems = carouselItems.length;

    function showSlide(index) {
    carouselItems.forEach(item => item.classList.remove('active'));
    carouselItems[index].classList.add('active');
    }

    function nextSlide() {
    currentSlide = (currentSlide + 1) % totalCarouselItems;
    showSlide(currentSlide);
    }

    function prevSlide() {
    currentSlide = (currentSlide - 1 + totalCarouselItems) % totalCarouselItems;
    showSlide(currentSlide);
    }

    document.querySelector('.next').addEventListener('click', nextSlide);
    document.querySelector('.prev').addEventListener('click', prevSlide);

    // Auto-slide every 4 seconds
    setInterval(nextSlide, 4000);

document.addEventListener('DOMContentLoaded', () => {
  const carouselItems = document.querySelectorAll('.parallax-content .carousel-item');
  let currentIndex = 0;

  setInterval(() => {
    carouselItems[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % carouselItems.length;
    carouselItems[currentIndex].classList.add('active');
  }, 4000);
});

/* Menu Hamburguer */

document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobileNav');

  hamburger.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
    hamburger.classList.toggle('open');
  });

  // Fechar o menu ao clicar em um link
  document.querySelectorAll('.mobile-nav a').forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('active');
      hamburger.classList.remove('open');
    });
  });
});
