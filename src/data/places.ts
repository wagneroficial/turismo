import type { Place } from '../types/place'

export const places: Place[] = [
  {
    slug: 'praca-da-matriz',
    category: 'praca',
    name: 'Praça da Matriz',
    tagline: 'O coração de Oriximiná, onde a fé, a história e o povo se encontram.',
    handwritten: 'Oriximiná também é feita de pessoas!',
    about:
      'A Praça da Matriz é o coração de Oriximiná. É nesse espaço que a fé e a vida da cidade se encontram. A praça abriga a Igreja Matriz de Nossa Senhora da Esperança, um dos principais símbolos da cidade, e é um lugar de encontro, convivência e celebrações. Durante o dia, é muito frequentada por famílias, jovens e visitantes que querem sentir a energia acolhedora do nosso povo.',
    landmark: {
      title: 'Igreja Matriz de Nossa Senhora da Esperança',
      description: 'Um dos marcos mais importantes da cidade.',
    },
    address: 'Centro, Oriximiná – PA',
    hours: 'Aberto todos os dias',
    highlights: [
      'Igreja Matriz',
      'Área de lazer',
      'Vista para o rio',
      'Eventos culturais e religiosos',
    ],
    coordinates: { lat: -1.767456, lng: -55.868117},
    heroImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf6XJ7RLrnFBgHahGdmF00o6keVlF5dvhT_g_saANhLA&s=10',
    gallery: [
      {
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf6XJ7RLrnFBgHahGdmF00o6keVlF5dvhT_g_saANhLA&s=10',
        alt: 'Vista da Praça da Matriz com a igreja ao fundo',
        caption: 'Praça da Matriz',
      },
      {
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf6XJ7RLrnFBgHahGdmF00o6keVlF5dvhT_g_saANhLA&s=10',
        alt: 'Fachada da Igreja Matriz',
        caption: 'Igreja Matriz',
      },
      {
        src: '/images/praca-da-matriz/convivencia.jpg',
        alt: 'Área de convivência da praça',
        caption: 'Área de convivência',
      },
      {
        src: '/images/praca-da-matriz/rio.jpg',
        alt: 'Pôr do sol sobre o rio Trombetas',
        caption: 'Vista para o rio Trombetas',
      },
    ],
    didYouKnow:
      'A Praça da Matriz já foi palco de grandes eventos religiosos e culturais. É um dos lugares mais fotografados da cidade e faz parte da memória e do coração de todos os oriximinaenses.',
    footerNote: 'Aqui, o rio também é cultura!',
  },
]

export const getPlaceBySlug = (slug: string) =>
  places.find((place) => place.slug === slug)

export const getPlacesByCategory = (category: Place['category']) =>
  places.filter((place) => place.category === category)
