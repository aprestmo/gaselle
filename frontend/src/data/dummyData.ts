interface HallOfFame {
  [key: string]: any;
  gaseller: string;
  featured: {
    name: string;
    description: string;
    orgNr: string;
    image: string;
  };
  winners: {
    id: number;
    company: string;
    figures: string;
  }[];
  profitable: {
    id: number;
    company: string;
    figures: string;
  }[];
  growth: {
    id: number;
    company: string;
    figures: string;
  }[];
  fastest: {
    id: number;
    company: string;
  }[];
  streak: {
    id: number;
    company: string;
  }[];
  comeback: {
    id: number;
    company: string;
  }[];
}

const hallOfFame: HallOfFame = {
  gaseller: '2640',
  featured: {
    name: 'Tibber',
    description: 'Tibber gjør strøm billigere, grønnere og smartere for husholdninger i Europa.',
    orgNr: '917245975',
    image: 'tibber.jpg',
  },
  winners: [
    {
      id: 1,
      company: 'Firma 1 AS',
      figures: '🏆🏆🏆🏆🏆🏆🏆',
    },
    {
      id: 2,
      company: 'Firma 2 AS',
      figures: '🏆🏆🏆🏆🏆🏆',
    },
    {
      id: 3,
      company: 'Firma 3 AS',
      figures: '🏆🏆🏆🏆🏆🏆',
    },
    {
      id: 4,
      company: 'Firma 4 AS',
      figures: '🏆🏆🏆🏆',
    },
    {
      id: 5,
      company: 'Firma 5 AS',
      figures: '🏆🏆🏆',
    }
  ],
  profitable: [
    {
      id: 1,
      company: 'Microsoft Norge',
      figures: '8.486.073',
    },
    {
      id: 2,
      company: 'Rosenberg Worley',
      figures: '6.218.427',
    },
    {
      id: 3,
      company: 'Komplett Distribusjon',
      figures: '3.894.983',
    },
    {
      id: 4,
      company: 'Rutebileiernes Standardiseringsaksjeselskap',
      figures: '3.892.218',
    },
    {
      id: 5,
      company: 'Møller Bil Øst',
      figures: '3.461.729',
    },
    {
      id: 6,
      company: 'Vikenco',
      figures: '3.164.477',
    },
    {
      id: 7,
      company: 'Rasmussengruppen',
      figures: '2.821.853',
    },
    {
      id: 8,
      company: 'Remarkable',
      figures: '2.675.565',
    },
    {
      id: 9,
      company: 'Tibber Norge',
      figures: '2.669.567',
    },
    {
      id: 10,
      company: 'British American Tobacco Norway',
      figures: '2.589.798',
    },
  ],
  growth: [
    {
      id: 1,
      company: 'Vestafjell',
      figures: '15.065,57',
    },
    {
      id: 2,
      company: 'Island Offshore Shipping',
      figures: '12.891,40',
    },
    {
      id: 3,
      company: 'Ht Nordic',
      figures: '10.009,68',
    },
    {
      id: 4,
      company: 'Skade1',
      figures: '9546,78',
    },
    {
      id: 5,
      company: 'Lyko',
      figures: '7579,13',
    },
    {
      id: 6,
      company: 'Noah Engadalen',
      figures: '5849,00',
    },
    {
      id: 7,
      company: 'Finter',
      figures: '5618,45',
    },
    {
      id: 8,
      company: 'Ultimate Nordic Bikes',
      figures: '5210,73',
    },
    {
      id: 9,
      company: 'Wolt Norway',
      figures: '5140,77',
    },
    {
      id: 10,
      company: 'Autoringen',
      figures: '5043,55',
    },
  ],
  fastest: [
    {
      id: 1,
      company: 'Raskeste firma 1',
    },
    {
      id: 2,
      company: 'Raskeste firma 2',
    },
    {
      id: 3,
      company: 'Raskeste firma 3',
    },
    {
      id: 4,
      company: 'Raskeste firma 4',
    },
    {
      id: 5,
      company: 'Raskeste firma 5',
    },
    {
      id: 6,
      company: 'Raskeste firma 6',
    },
    {
      id: 7,
      company: 'Raskeste firma 7',
    },
    {
      id: 8,
      company: 'Raskeste firma 8',
    },
    {
      id: 9,
      company: 'Raskeste firma 9',
    },
    {
      id: 10,
      company: 'Raskeste firma 10',
    }
  ],
  streak: [
    {
      id: 1,
      company: 'Firma på rad 1',
    },
    {
      id: 2,
      company: 'Firma på rad 2',
    },
    {
      id: 3,
      company: 'Firma på rad 3',
    },
    {
      id: 4,
      company: 'Firma på rad 4',
    },
    {
      id: 5,
      company: 'Firma på rad 5',
    },
    {
      id: 6,
      company: 'Firma på rad 6',
    },
    {
      id: 7,
      company: 'Firma på rad 7',
    },
    {
      id: 8,
      company: 'Firma på rad 8',
    },
    {
      id: 9,
      company: 'Firma på rad 9',
    },
    {
      id: 10,
      company: 'Firma på rad 10',
    }
  ],
  comeback: [
    {
      id: 1,
      company: 'Comeback Firma 1',
    },
    {
      id: 2,
      company: 'Comeback Firma 2',
    },
    {
      id: 3,
      company: 'Comeback Firma 3',
    },
    {
      id: 4,
      company: 'Comeback Firma 4',
    },
    {
      id: 5,
      company: 'Comeback Firma 5',
    },
    {
      id: 6,
      company: 'Comeback Firma 6',
    },
    {
      id: 7,
      company: 'Comeback Firma 7',
    },
    {
      id: 8,
      company: 'Comeback Firma 8',
    },
    {
      id: 9,
      company: 'Comeback Firma 9',
    },
    {
      id: 10,
      company: 'Comeback Firma 10',
    }
  ],
};

export default hallOfFame;
