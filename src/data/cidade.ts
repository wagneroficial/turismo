/**
 * ============================================================
 *  INFORMAÇÕES SOBRE ORIXIMINÁ
 *  Fontes: IBGE (Censo 2022), Wikipédia e o livro
 *  "Entre águas bravas e mansas: índios e quilombolas em
 *  Oriximiná" (Comissão Pró-Índio de São Paulo, 2015).
 *  Itens com [confirmar] precisam ser verificados pelos alunos.
 * ============================================================
 */

export interface Fato {
  valor: string
  titulo: string
  detalhe: string
  icone: string
}

export interface MarcoHistoria {
  ano: string
  titulo: string
  texto: string
}

export const cidade = {
  nome: 'Oriximiná',
  apelido: 'Princesa do Trombetas',
  slogan: 'Rio, floresta, fé e gente: conheça a Princesa do Trombetas.',
  resumo:
    'Oriximiná fica no extremo oeste do Pará, às margens do rio Trombetas, na região do Baixo Amazonas. É um dos maiores municípios do Brasil em extensão e reúne rios, cachoeiras, florestas protegidas, comunidades quilombolas e povos indígenas.',
}

export const fatos: Fato[] = [
  {
    valor: '107,6 mil km²',
    titulo: 'Extensão',
    detalhe: 'Um dos maiores municípios do Brasil.',
    icone: '🗺️',
  },
  {
    valor: '≈ 68 mil',
    titulo: 'Habitantes',
    detalhe: 'Segundo o Censo 2022 do IBGE.',
    icone: '👥',
  },
  {
    valor: '≈ 760 km',
    titulo: 'Rio Trombetas',
    detalhe: 'Do alto da fronteira até o Amazonas.',
    icone: '🌊',
  },
  {
    valor: 'Equador',
    titulo: 'Linha imaginária',
    detalhe: 'A linha do Equador cruza o município.',
    icone: '🌍',
  },
]

export const economia = [
  {
    titulo: 'Mineração de bauxita',
    texto:
      'No distrito de Porto Trombetas, a Mineração Rio do Norte (MRN) é uma das maiores produtoras de bauxita do país e movimenta a economia do município.',
    icone: '⛏️',
  },
  {
    titulo: 'Castanha-do-brasil e extrativismo',
    texto:
      'A coleta de castanha e de outros produtos da floresta é fonte de renda para muitas comunidades.',
    icone: '🌰',
  },
  {
    titulo: 'Pesca e agricultura familiar',
    texto:
      'Rios e lagos garantem peixe, como o pirarucu, e a agricultura familiar abastece a cidade.',
    icone: '🐟',
  },
]

export const unidadesDeConservacao = [
  {
    nome: 'Estação Ecológica Grão-Pará',
    texto: 'Uma das maiores áreas de floresta tropical totalmente protegidas do planeta; boa parte fica no norte de Oriximiná.',
    slug: 'estacao-ecologica-grao-para',
  },
  {
    nome: 'Reserva Biológica do Rio Trombetas',
    texto: 'Criada em 1979 para proteger a tartaruga-da-amazônia; cerca de 1 milhão de hectares.',
    slug: 'reserva-biologica-do-rio-trombetas',
  },
  {
    nome: 'Floresta Nacional de Saracá-Taquera',
    texto: 'Unidade de uso sustentável criada em 1989, com cerca de 441 mil hectares.',
    slug: 'floresta-nacional-saraca-taquera',
  },
  {
    nome: 'Floresta Estadual do Trombetas',
    texto: 'Criada em 2006, tem mais de 3 milhões de hectares, quase todos dentro de Oriximiná.',
    slug: '',
  },
]

export const historia: MarcoHistoria[] = [
  {
    ano: '1877',
    titulo: 'O povoado nasce às margens do Trombetas',
    texto:
      'O padre José Nicolino de Souza funda, na margem esquerda do rio Trombetas, o povoado de Uruá-Tapera, origem de Oriximiná.',
  },
  {
    ano: '1886',
    titulo: 'Elevação a freguesia',
    texto: 'O povoado cresce e é elevado à categoria de freguesia.',
  },
  {
    ano: '1894',
    titulo: 'Vila e município',
    texto:
      'Pela Lei provincial nº 174, o lugar passa a ser vila e município, já com o nome de Oriximiná.',
  },
  {
    ano: '1900',
    titulo: 'Extinção do município',
    texto: 'O município é extinto e seu território é dividido entre Faro e Óbidos.',
  },
  {
    ano: '1934',
    titulo: 'Oriximiná volta a ser município',
    texto:
      'O Decreto estadual nº 1.442, de 24 de dezembro de 1934, restaura Oriximiná como município autônomo.',
  },
]

export const povosECultura = {
  quilombolas: {
    titulo: 'Quilombolas do Trombetas',
    paragrafos: [
      'Há cerca de 200 anos, pessoas escravizadas que fugiam de fazendas e cidades do Baixo Amazonas subiram as cachoeiras do rio Trombetas e formaram mocambos (quilombos). Hoje, Oriximiná abriga uma das presenças quilombolas mais antigas e numerosas da Amazônia.',
      'Segundo levantamento de 2015, são 36 comunidades rurais organizadas em oito territórios coletivos, com cerca de 8 mil pessoas. Os quilombolas de Oriximiná foram os primeiros do Brasil a conquistar a titulação coletiva de suas terras.',
    ],
  },
  indigenas: {
    titulo: 'Povos indígenas',
    paragrafos: [
      'Ao longo dos rios Trombetas, Mapuera, Cachorro, Nhamundá e Erepecuru vivem cerca de 18 povos indígenas, entre eles Waiwai, Katxuyana, Hixkariyana, Tunayana, Mawayana e Zo’é.',
      'Segundo o mesmo levantamento, eram cerca de 4.300 pessoas em 46 aldeias, em terras como Nhamundá-Mapuera, Trombetas-Mapuera e Zo’é.',
    ],
  },
  respeito:
    'Terras indígenas e territórios quilombolas não são pontos turísticos abertos: visitar exige autorização e combinação prévia com as associações e lideranças locais. Respeite sempre as regras e os modos de vida de cada comunidade.',
}

export const comoChegar = [
  {
    titulo: 'De avião',
    icone: '✈️',
    texto:
      'O Aeroporto de Oriximiná fica a cerca de 8 km do centro. [Confirmar: companhias, voos e horários atuais.]',
  },
  {
    titulo: 'De barco',
    icone: '🚤',
    texto:
      'Barcos regionais ligam Oriximiná a cidades do Baixo Amazonas pelos rios Amazonas e Trombetas. [Confirmar: linhas, horários e valores no Porto Fluvial.]',
  },
  {
    titulo: 'Dentro da cidade',
    icone: '🛵',
    texto:
      'O centro, as praças e a orla podem ser percorridos a pé ou de moto-táxi. [Confirmar: transporte local e valores.]',
  },
]
