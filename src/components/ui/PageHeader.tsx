import Breadcrumb, { type Crumb } from './Breadcrumb'

interface PageHeaderProps {
  title: string
  subtitle?: string
  crumbs?: Crumb[]
}

export default function PageHeader({ title, subtitle, crumbs }: PageHeaderProps) {
  const items: Crumb[] = crumbs ?? [{ label: 'Início', to: '/' }, { label: title }]

  return (
    <section className="page-header">
      <div className="container">
        <Breadcrumb items={items} />
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </section>
  )
}
