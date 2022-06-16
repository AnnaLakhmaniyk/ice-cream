import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const lightbox = new SimpleLightbox('.gallery__list a', {
  overlay: true,
  overlayOpacity: 0.7,
  nav: true,
  close: true,
});
