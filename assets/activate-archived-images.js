document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('img[data-src]').forEach((image) => {
    if (image.dataset.srcset) image.srcset = image.dataset.srcset;
    image.src = image.dataset.src;
    image.classList.remove('lazyload');
  });
});
