interface SectionTitleProps {
  icon?: string
  children: string
}

export default function SectionTitle({ icon, children }: SectionTitleProps) {
  return (
    <div className="section-title">
      {icon && (
        <span className="section-title__icon" aria-hidden="true">
          {icon}
        </span>
      )}
      <h2 className="section-title__brush hand">{children}</h2>
    </div>
  )
}
