/**
 * ============================================================
 *  PONTOS TURÍSTICOS  →  para cadastrar um novo lugar, copie um
 *  item da lista `places` e troque os dados.
 *
 *  Os lugares com `precisaConfirmar: true` têm descrição genérica:
 *  só o NOME foi confirmado em guias de turismo. Os alunos devem
 *  visitar / pesquisar e completar endereço, horário, história e fotos
 *  (depois, remover a linha `precisaConfirmar`).
 * ============================================================
 */
import type { CategoryInfo, Place, PlaceCategory } from '../types/place'

export const categories: Record<PlaceCategory, CategoryInfo> = {
  praca: {
    label: 'Praças',
    path: '/pracas',
    icon: '⛪',
    description: 'Espaços de encontro, fé e convivência.',
  },
  orla: {
    label: 'Orla e cidade',
    path: '/orla',
    icon: '⚓',
    description: 'Beira d’água, porto e espaços de eventos.',
  },
  cachoeira: {
    label: 'Cachoeiras',
    path: '/cachoeiras',
    icon: '💧',
    description: 'Quedas d’água e corredeiras do rio Trombetas.',
  },
  natureza: {
    label: 'Natureza',
    path: '/natureza',
    icon: '🌳',
    description: 'Rio, lagos e unidades de conservação.',
  },
}

const CONFIRMAR_HORARIO = '[confirmar horário]'
const CIDADE = 'Oriximiná – PA'

export const places: Place[] = [
  /* ================= PRAÇAS ================= */
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
    highlights: ['Igreja Matriz', 'Área de lazer', 'Vista para o rio', 'Eventos culturais e religiosos'],
    coordinates: { lat: -1.7656, lng: -55.8661 },
    heroImage: '/images/praca-da-matriz/hero.jpg',
    gallery: [
      {
        src: '/images/praca-da-matriz/principal.jpg',
        alt: 'Vista da Praça da Matriz com a igreja ao fundo',
        caption: 'Praça da Matriz',
      },
      {
        src: '/images/praca-da-matriz/igreja.jpg',
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
  {
    slug: 'praca-do-centenario',
    category: 'praca',
    name: 'Praça do Centenário',
    tagline: 'Mais um espaço de encontro e convivência em Oriximiná.',
    about:
      'A Praça do Centenário é um dos espaços públicos de Oriximiná, lugar de encontro, caminhadas e eventos da comunidade. [Completar: origem do nome, o que a praça tem de especial e quando é mais movimentada.]',
    address: CIDADE,
    hours: CONFIRMAR_HORARIO,
    highlights: ['Área de convivência', '[completar destaques]'],
    heroImage: '/images/lugares/praca-do-centenario/hero.jpg',
    gallery: [],
    precisaConfirmar: true,
  },
  {
    slug: 'praca-santo-antonio',
    category: 'praca',
    name: 'Praça Santo Antônio',
    tagline: 'Um recanto de convivência na cidade.',
    about:
      'A Praça Santo Antônio é um dos espaços públicos de convívio de Oriximiná. [Completar: história, localização, atividades e eventos que acontecem na praça.]',
    address: CIDADE,
    hours: CONFIRMAR_HORARIO,
    highlights: ['Área de convivência', '[completar destaques]'],
    heroImage: '/images/lugares/praca-santo-antonio/hero.jpg',
    gallery: [],
    precisaConfirmar: true,
  },
  {
    slug: 'praca-da-saudade',
    category: 'praca',
    name: 'Praça da Saudade',
    tagline: 'Um espaço da cidade guardado na memória do povo.',
    about:
      'A Praça da Saudade é um dos espaços públicos de Oriximiná. [Completar: origem do nome, histórias contadas pelos moradores e o que visitar por perto.]',
    address: CIDADE,
    hours: CONFIRMAR_HORARIO,
    highlights: ['Área de convivência', '[completar destaques]'],
    heroImage: '/images/lugares/praca-da-saudade/hero.jpg',
    gallery: [],
    precisaConfirmar: true,
  },

  /* ================= ORLA E CIDADE ================= */
  {
    slug: 'orla-do-iripixi',
    category: 'orla',
    name: 'Orla do Iripixi',
    tagline: 'Lazer, caminhada e entardecer à beira d’água.',
    about:
      'A Orla do Iripixi é um dos espaços de lazer à beira d’água de Oriximiná, ótimo para caminhar, encontrar amigos e apreciar o entardecer. [Completar: localização exata, estrutura (quiosques, iluminação, quadras) e melhores horários.]',
    address: CIDADE,
    hours: CONFIRMAR_HORARIO,
    highlights: ['Passeio à beira d’água', 'Entardecer', '[completar destaques]'],
    heroImage: '/images/lugares/orla-do-iripixi/hero.jpg',
    gallery: [],
    precisaConfirmar: true,
  },
  {
    slug: 'porto-fluvial',
    category: 'orla',
    name: 'Porto Fluvial',
    tagline: 'A porta de entrada pelas águas do Trombetas.',
    about:
      'Oriximiná nasceu às margens do rio Trombetas, e o Porto Fluvial é um dos pontos onde essa ligação com o rio aparece no dia a dia: barcos, pessoas e mercadorias em movimento. [Completar: linhas de barco, horários, o que se vende no entorno.]',
    address: CIDADE,
    hours: CONFIRMAR_HORARIO,
    highlights: ['Movimento de barcos', 'Vida ribeirinha', '[completar destaques]'],
    heroImage: '/images/lugares/porto-fluvial/hero.jpg',
    gallery: [],
    didYouKnow:
      'Segundo registros históricos, em 1877 o padre José Nicolino de Souza fundou, na margem esquerda do rio Trombetas, o povoado que deu origem a Oriximiná.',
    precisaConfirmar: true,
  },
  {
    slug: 'parque-de-exposicoes-diniz-filho',
    category: 'orla',
    name: 'Parque de Exposições Diniz Filho',
    tagline: 'Espaço da cidade para feiras, exposições e eventos.',
    about:
      'O Parque de Exposições Diniz Filho é um dos espaços de eventos de Oriximiná. [Completar: quais feiras e festas acontecem lá, datas e como participar.]',
    address: CIDADE,
    hours: CONFIRMAR_HORARIO,
    highlights: ['Feiras e exposições', 'Eventos', '[completar destaques]'],
    heroImage: '/images/lugares/parque-diniz-filho/hero.jpg',
    gallery: [],
    precisaConfirmar: true,
  },

  /* ================= CACHOEIRAS ================= */
  {
    slug: 'cachoeira-do-jatuarana',
    category: 'cachoeira',
    name: 'Cachoeira do Jatuarana',
    tagline: 'Água corrente para refrescar o dia.',
    about:
      'A Cachoeira do Jatuarana aparece entre os pontos turísticos de Oriximiná e é uma opção de contato com a natureza e de banho. [Completar: como chegar, distância da cidade, melhor época de visita e cuidados.]',
    address: '[confirmar localização] – Oriximiná – PA',
    hours: CONFIRMAR_HORARIO,
    highlights: ['Contato com a natureza', '[completar destaques]'],
    heroImage: '/images/lugares/cachoeira-do-jatuarana/hero.jpg',
    gallery: [],
    precisaConfirmar: true,
  },
  {
    slug: 'cachoeira-porteira',
    category: 'cachoeira',
    name: 'Cachoeira Porteira',
    tagline: 'A grande porteira do rio Trombetas e da história quilombola.',
    handwritten: 'Rio acima, a história ganha força.',
    about:
      'A Cachoeira Porteira é a primeira grande queda do rio Trombetas. Abaixo dela, o rio é calmo e navegável; acima, uma longa sequência de cachoeiras e corredeiras interrompe o curso das águas. O nome também é dado a uma comunidade da região, ligada à história dos quilombos e dos povos indígenas do Trombetas.',
    landmark: {
      title: 'Primeira grande cachoeira do Trombetas',
      description: 'Marco natural e histórico do rio.',
    },
    address: 'Rio Trombetas, rio acima de Oriximiná – PA',
    hours: 'Acesso por rio – planeje com antecedência [confirmar]',
    highlights: ['Cachoeiras e corredeiras', 'Paisagem do alto Trombetas', 'História dos quilombos'],
    heroImage: '/images/lugares/cachoeira-porteira/hero.jpg',
    gallery: [],
    didYouKnow:
      'Foi subindo as cachoeiras do rio Trombetas que, há cerca de 200 anos, pessoas escravizadas que fugiam de fazendas e cidades do Baixo Amazonas fundaram os quilombos da região, hoje uma das maiores concentrações de territórios quilombolas do Brasil.',
    footerNote: 'Aqui, o rio guarda memória!',
  },

  /* ================= NATUREZA ================= */
  {
    slug: 'rio-trombetas',
    category: 'natureza',
    name: 'Rio Trombetas',
    tagline: 'O rio que deu origem e identidade a Oriximiná.',
    handwritten: 'A cidade nasceu da margem do rio.',
    about:
      'Com cerca de 760 km de extensão, o Trombetas nasce perto da fronteira com a Guiana, atravessa Oriximiná e deságua no Amazonas, perto de Óbidos. No trecho baixo, o rio é navegável por embarcações grandes; acima da Cachoeira Porteira, é interrompido por cachoeiras e corredeiras. É por ele que se chega a quilombos, lagos, florestas protegidas e terras indígenas.',
    address: 'Oriximiná – PA',
    hours: 'O rio é visível o ano todo',
    highlights: ['Navegação e passeios de barco', 'Cheia em abril e maio', 'Paisagens e entardecer'],
    heroImage: '/images/lugares/rio-trombetas/hero.jpg',
    gallery: [],
    didYouKnow:
      'O Trombetas tem seu nível mais alto em abril e maio. Por isso, a paisagem das margens, das praias de rio e dos lagos muda bastante ao longo do ano.',
    footerNote: 'Aqui, o rio também é cultura!',
  },
  {
    slug: 'lago-sapucua',
    category: 'natureza',
    name: 'Lago Sapucuá',
    tagline: 'Paisagem ribeirinha, pesca e vida amazônica.',
    about:
      'O Lago Sapucuá faz parte da paisagem ribeirinha de Oriximiná e é citado entre as atrações naturais do município. A região é conhecida pela pesca do pirarucu e pelo modo de vida das comunidades que vivem do rio e dos lagos. [Completar: como chegar, comunidades próximas e regras de visitação.]',
    address: '[confirmar localização] – Oriximiná – PA',
    hours: CONFIRMAR_HORARIO,
    highlights: ['Paisagem de lago', 'Pesca do pirarucu', 'Vida ribeirinha'],
    heroImage: '/images/lugares/lago-sapucua/hero.jpg',
    gallery: [],
    precisaConfirmar: true,
  },
  {
    slug: 'reserva-biologica-do-rio-trombetas',
    category: 'natureza',
    name: 'Reserva Biológica do Rio Trombetas',
    tagline: 'Floresta protegida para preservar a tartaruga-da-amazônia.',
    about:
      'Criada em 1979 para proteger a tartaruga-da-amazônia, a Reserva Biológica do Rio Trombetas tem cerca de 1 milhão de hectares e é administrada pelo ICMBio. Por ser uma unidade de proteção integral, a visitação é restrita e depende de autorização do órgão.',
    address: 'Rio Trombetas, Oriximiná – PA',
    hours: 'Visitação somente com autorização do ICMBio',
    highlights: ['Cerca de 1 milhão de hectares', 'Criada em 1979', 'Proteção da tartaruga-da-amazônia'],
    heroImage: '/images/lugares/rebio-trombetas/hero.jpg',
    gallery: [],
    didYouKnow:
      'A reserva foi criada para proteger a tartaruga-da-amazônia, espécie que depende das praias de rio para desovar.',
  },
  {
    slug: 'floresta-nacional-saraca-taquera',
    category: 'natureza',
    name: 'Floresta Nacional de Saracá-Taquera',
    tagline: 'Floresta de uso sustentável no coração do Trombetas.',
    about:
      'A Floresta Nacional de Saracá-Taquera é uma unidade de conservação de uso sustentável criada em 1989, com cerca de 441 mil hectares. Ela abriga vários dos principais igarapés da bacia do Trombetas. [Completar: como visitar e atividades permitidas, junto ao ICMBio.]',
    address: 'Oriximiná – PA',
    hours: '[confirmar regras de visitação com o ICMBio]',
    highlights: ['Cerca de 441 mil hectares', 'Criada em 1989', 'Igarapés e floresta'],
    heroImage: '/images/lugares/flona-saraca-taquera/hero.jpg',
    gallery: [],
    precisaConfirmar: true,
  },
  {
    slug: 'estacao-ecologica-grao-para',
    category: 'natureza',
    name: 'Estação Ecológica Grão-Pará',
    tagline: 'Uma das maiores áreas de floresta tropical totalmente protegidas do mundo.',
    about:
      'Cerca de 76% da Estação Ecológica Grão-Pará está dentro de Oriximiná, na parte norte do município. Com mais de 4 milhões de hectares, é descrita como a maior unidade de conservação de floresta tropical totalmente protegida do planeta. Por ser uma estação ecológica, é voltada à pesquisa e à preservação, e não à visitação turística.',
    address: 'Norte do município de Oriximiná – PA',
    hours: 'Sem visitação turística',
    highlights: ['Mais de 4 milhões de hectares', 'Floresta tropical protegida', 'Pesquisa científica'],
    heroImage: '/images/lugares/grao-para/hero.jpg',
    gallery: [],
    didYouKnow:
      'Dos mais de 4 milhões de hectares da Estação Ecológica Grão-Pará, cerca de 76% ficam dentro do município de Oriximiná.',
  },
]

export const getPlaceBySlug = (slug: string) => places.find((place) => place.slug === slug)

export const getPlacesByCategory = (category: PlaceCategory) =>
  places.filter((place) => place.category === category)
