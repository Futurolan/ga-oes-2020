/* eslint-disable indent */
const menu = [
  { type: 'config', id: 'news' },
  {
    type: 'page',
    title: 'OES Charity Tour',
    id: 199603,
    link: '/oes-charity-tour',
    children: [
      { type: 'page', title: 'OES Charity Tour', id: 199603, link: '/oes-charity-tour' },
      { type: 'page', title: '28 mars - Nîmes', id: 199706, link: '/nimes' },
      { type: 'page', title: '18 avril - Tarbes', id: 199707, link: '/tarbes' },
      { type: 'page', title: '18 avril - Albi', id: 199708, link: '/albi' },
      { type: 'page', title: '9 mai - Toulouse', id: 199709, link: '/toulouse' }
    ]
  },
  { type: 'config', id: 'tournaments' },
  { type: 'config', id: 'info' },
  //  { type: 'external', title: 'ESL Pro League', link: 'https://pro.eslgaming.com/occitanie/' },
  { type: 'config', id: 'partners' },
  {
    type: 'nolink',
    color: '#f9dc00',
    title: 'Billetterie',
    children: [
      { type: 'config', id: 'tickets' },
      { type: 'config', id: 'staticTickets' }
    ]
  }
]

module.exports = menu
