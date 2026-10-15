// =================================
// OSITUWO ELIJAH
// Professional Personal Website
// =================================

document.addEventListener("DOMContentLoaded", function () {

    console.log("Osituwo Elijah website loaded successfully.");

});


<script>
  const clickMeBtn = document.getElementById('clickMeBtn');
  const gallerySection = document.getElementById('gallerySection');
  clickMeBtn.addEventListener('click', () => {
    gallerySection.style.display =
      gallerySection.style.display === 'block' ? 'none' : 'block';
  });
  const lightbox = document.getElementById('lightbox');
  const lightboxContent = document.getElementById('lightbox-content');
  const closeLightbox = document.getElementById('closeLightbox');
  document.querySelectorAll('.g-item').forEach(item => {
    item.addEventListener('click', () => {
      let type, label, color;
      if (item.classList.contains('carousel')) {
        const active = item.querySelector('.carousel-slide.active');
        type = active.dataset.type; label = active.dataset.label; color = active.style.background;
      } else {
        type = item.dataset.type; label = item.dataset.label; color = item.style.background;
      }
      lightboxContent.style.background = color;
      lightboxContent.textContent = type === 'video' ? ('▶ ' + label) : label;
      lightbox.classList.add('active');
    });
  });
  function closeBox(){ lightbox.classList.remove('active'); }
  closeLightbox.addEventListener('click', closeBox);
  lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeBox(); });
  const slides = document.querySelectorAll('.carousel-slide');
  const carouselEl = document.getElementById('carousel');
  let slideIndex = 0;
  function showSlide(newIndex){
    slides[slideIndex].classList.remove('active');
    slideIndex = (newIndex + slides.length) % slides.length;
    slides[slideIndex].classList.add('active');
  }
  function nextSlide(){ showSlide(slideIndex + 1); }
  function prevSlide(){ showSlide(slideIndex - 1); }
  let autoCycle = setInterval(nextSlide, 3000);
  let touchStartX = 0;
  carouselEl.addEventListener('touchstart', (e) => { touchStartX = e.changedTouches[0].screenX; });
  carouselEl.addEventListener('touchend', (e) => {
    const diff = e.changedTouches[0].screenX - touchStartX;
    if (Math.abs(diff) > 40){ clearInterval(autoCycle); diff < 0 ? nextSlide() : prevSlide(); autoCycle = setInterval(nextSlide, 3000); }
  });
  let mouseStartX = null;
  carouselEl.addEventListener('mousedown', (e) => { mouseStartX = e.screenX; });
  carouselEl.addEventListener('mouseup', (e) => {
    if (mouseStartX === null) return;
    const diff = e.screenX - mouseStartX; mouseStartX = null;
    if (Math.abs(diff) > 40){ clearInterval(autoCycle); diff < 0 ? nextSlide() : prevSlide(); autoCycle = setInterval(nextSlide, 3000); }
  });
</script>
