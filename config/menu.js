const menu = [
  { type: 'config', id: 'news' },
  { type: 'page', title: 'Road to Occitanie', id: 199603, link: '/roadtooccitanie' },
  {
    type: 'nolink',
    color: '#FF00FF',
    title: 'Billetterie',
    children: [
      { type: 'config', id: 'tickets' },
      { type: 'config', id: 'tickets2'}
    ]
  },
  { type: 'config', id: 'tournaments' },
  { type: 'config', id: 'info' },
  //  { type: 'external', title: 'ESL Pro League', link: 'https://pro.eslgaming.com/occitanie/' },
  { type: 'config', id: 'partners' }
]

module.exports = menu
