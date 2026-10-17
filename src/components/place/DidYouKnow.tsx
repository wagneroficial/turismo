import type { Place } from '../../types/place'

export default function DidYouKnow({ place }: { place: Place }) {
  if (!place.didYouKnow) return null

  return (
    <section className="did-you-know">
      <div className="did-you-know__text">
        <h3 className="hand">💡 Você sabia?</h3>
        <p>{place.didYouKnow}</p>
      </div>
      {place.footerNote && <p className="did-you-know__note hand">{place.footerNote} ♡</p>}
    </section>
  )
}
