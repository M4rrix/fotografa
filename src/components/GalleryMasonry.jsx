export default function GalleryMasonry({ images, altBase = "foto" }) {
  return (
    <div className="gallery-masonry" aria-label="Galería de imágenes">
      {images.map((src, i) => (
        <figure className="gm-item" key={i}>
          <img
            src={src}
            alt={`${altBase} ${i + 1}`}
            loading="lazy"
            decoding="async"
          />
        </figure>
      ))}
    </div>
  );
}
