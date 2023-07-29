export const es = {
  country: 'es',
  name: 'Congreso de los Diputados',
  factions: [
    {
      name: 'Partido Socialista Obrero Español (PSOE)',
      color: '#ff0000',
      deputies: 120,
    },
    {
      name: 'Partido Popular (PP)',
      color: '#1d84ce',
      deputies: 88,
    },
    {
      name: 'Vox',
      color: '#5baf1e',
      deputies: 52,
    },
    {
      name: 'Unidas Podemos (UP)',
      color: '#612d62',
      deputies: [
        { name: 'Podemos', deputies: 21 },
        { name: 'Izquierda Unida (IU)', deputies: 6 },
        { name: 'En Comú Podem (ECP)', deputies: 3 },
        { name: 'Esquerra Verda (EV)', deputies: 1 },
        { name: 'Alianza Verde (AV)', deputies: 1 },
      ],
    },
    {
      name: 'Esquerra Republicana de Catalunya-Sobiranistes (ERC-Sobiranistes)',
      color: '#ffb232',
      deputies: [
        { name: 'Esquerra Republicana de Catalunya (ERC9', deputies: 12 },
        { name: 'Sobiranistes', deputies: 1 },
      ],
    },
    {
      name: 'Ciudadanos (Cs)',
      color: '#eb6109',
      deputies: 9,
    },
    {
      name: 'Euzko Alderdi Jeltzalea (EAJ)',
      color: '#4aae4a',
      deputies: 6,
    },
    {
      name: 'Euskal Herria Bildu (EH Bildu)',
      color: '#b5cf18',
      deputies: 5,
    },
    {
      name: 'Mixed Group',
      color: '#aaaaaa',
      deputies: 14,
    },
    {
      name: 'Plural Group',
      color: '#aaaaaa',
      deputies: 10,
    },
  ],
  pollTypes: [],
  votingModes: [
    {
      name: 'Normal vote',
      threshold: 0.5,
      abstainIsNo: false
    },
  ]
};
