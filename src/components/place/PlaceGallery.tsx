import { useState } from 'react'
import Img from '../ui/Img'
import type { PlaceImage } from '../../types/place'

export default function PlaceGallery({ images }: { images: PlaceImage[] }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = images[activeIndex]

  if (!active) return null

  return (
    <section className="gallery">
      <figure className="gallery__main">
        <Img src={active.src} alt={active.alt} />
        <figcaption>📷 {active.caption}</figcaption>
      </figure>

      <div className="gallery__thumbs">
        {images.slice(1).map((image, i) => {
          const index = i + 1
          return (
            <button
              key={image.src}
              type="button"
              className={`gallery__thumb${index === activeIndex ? ' gallery__thumb--active' : ''}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Ver ${image.caption}`}
            >
              <Img src={image.src} alt={image.alt} />
              <span>{image.caption}</span>
            </button>
          )
        })}
      </div>
    </section>
  )
}
