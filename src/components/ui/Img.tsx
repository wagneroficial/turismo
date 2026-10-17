import { useState } from 'react'

interface ImgProps {
  src: string
  alt: string
  className?: string
}

/** Imagem com fallback: se o arquivo ainda não existir em /public/images, mostra um bloco verde. */
export default function Img({ src, alt, className = '' }: ImgProps) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div className={`img-fallback ${className}`} role="img" aria-label={alt}>
        <span>🖼️ {alt}</span>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  )
}
