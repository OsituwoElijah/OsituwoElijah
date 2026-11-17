// =================================
// OSITUWO ELIJAH
// Professional Personal Website
// =================================

document.addEventListener("DOMContentLoaded", function () {

    console.log("Osituwo Elijah website loaded successfully.");

});
// =================================
// OSITUWO ELIJAH
// Professional Personal gallerySection 
// =================================

document.querySelectorAll('.g-item').forEach(item => {
  item.addEventListener('click', () => {
    const source = item.classList.contains('carousel')
      ? item.querySelector('.carousel-slide.active')
      : item;
    lightboxContent.innerHTML = '';
    if (source.dataset.type === 'video') {
      const v = document.createElement('video');
      v.src = source.dataset.src;
      v.controls = true;
      v.autoplay = true;
      v.playsInline = true;
      lightboxContent.appendChild(v);
    } else {
      const img = document.createElement('img');
      img.src = source.dataset.src;
      lightboxContent.appendChild(img);
    }
    lightbox.classList.add('active');
  });
});
function closeBox(){
  lightbox.classList.remove('active');
  lightboxContent.innerHTML = '';
                        }
