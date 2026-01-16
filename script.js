// Анимация появления при прокрутке
document.addEventListener('DOMContentLoaded', () => {
  const artworks = document.querySelectorAll('.artwork');
  const artists = document.querySelectorAll('.artist');

  const observerOptions = {
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  artworks.forEach(artwork => {
    artwork.style.transitionDelay = artwork.dataset.delay + 's';
    observer.observe(artwork);
  });

  artists.forEach(artist => {
    observer.observe(artist);
  });

  // Плавное изменение шапки при прокрутке
  window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
});
