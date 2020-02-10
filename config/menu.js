/* eslint-disable indent */
const menu = [
  { type: 'config', id: 'news' },
  {
    type: 'page',
    title: 'Road to Occitanie',
    id: 199603,
    link: '/roadtooccitanie',
    children: [
      { type: 'page', title: 'Road to Occitanie', id: 199603, link: '/roadtooccitanie' },
      { type: 'page', title: '28 mars - Nîmes', id: 199706, link: '/nimes' },
      { type: 'page', title: '18 avril - Tarbes', id: 199707, link: '/tarbes' },
      { type: 'page', title: '18 avril - Albi', id: 199708, link: '/albi' },
      { type: 'page', title: '9 mai - Toulouse', id: 199709, link: '/toulouse' }
    ]
  },
  {
    type: 'nolink',
    color: '#FF00FF',
    title: 'Billetterie',
    children: [
      { type: 'config', id: 'tickets' },
      { type: 'config', id: 'tickets2' }
    ]
  },
  { type: 'config', id: 'tournaments' },
  { type: 'config', id: 'info' },
  //  { type: 'external', title: 'ESL Pro League', link: 'https://pro.eslgaming.com/occitanie/' },
  { type: 'config', id: 'partners' }
]

module.exports = menu
