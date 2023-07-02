interface Navigation {
  [key: string]: Array<{
    name: string;
    path: string;
    page: string;
  }>
}

const navigationData: Navigation = {
  primary: [
    {
      name: 'Nyheter',
      path: '/nyheter/',
      page: 'nyheter',
    },
    {
      name: 'Hall of Fame',
      path: '/hall-of-fame/',
      page: 'hall-of-fame',
    },
    {
      name: 'Om Gaselle',
      path: '/om-gaselle/',
      page: 'om-gaselle',
    },
    {
      name: 'Min profil',
      path: '//min-gaselle.dn.no/',
      page: 'min-profil',
    }
  ],
  footer: [
    {
      name: 'Nettverk',
      path: '#',
      page: '',
    },
    {
      name: 'Kriterier',
      path: '#',
      page: '',
    },
    {
      name: 'Nettbutikk',
      path: '#',
      page: '',
    },
    {
      name: 'Diplom',
      path: '#',
      page: '',
    },
    {
      name: 'Nyhetsbrev',
      path: '#',
      page: '',
    },
  ],
  social: [
    {
      name: 'LinkedIn',
      path: '#',
      page: '',
    },
    {
      name: 'Facebook',
      path: '#',
      page: '',
    },
    {
      name: 'Instagram',
      path: '#',
      page: '',
    },
  ]
}

export default navigationData;
