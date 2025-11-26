// src/components/GalleryMasonry.jsx
export default function GalleryMasonry({
  images,
  altBase = "foto",
  onImageClick, // 👈 nueva prop
}) {
  return (
    <div className="gallery-masonry" aria-label="Galería de imágenes">
      {images.map((src, i) => (
        <figure
          className="gm-item"
          key={i}
          onClick={onImageClick ? () => onImageClick(i) : undefined} // 👈 dispara el índice
        >
          <img
            src={src}
            alt={`${altBase} ${i + 1}`}
            loading="lazy"
            decoding="async"
            className={onImageClick ? "click-zoom" : undefined} // 👈 cursor de zoom
            draggable="false"                          // no arrastrar a escritorio
          />
        </figure>
      ))}
    </div>
  );
}
