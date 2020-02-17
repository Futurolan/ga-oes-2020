const config = {
  title: 'Occitanie Esport 2020',
  logo: '/static/img/oesga.png',
  description: 'L\'Occitanie Esport 2020 aura lieu du 30 au 31 mai 2020 !',
  metaImagePath: '/static/img/oesga.png',
  gaTrackingId: 'UA-128777022-10',
  mainPartner: {
    logo: '/static/img/logo-occitanie-238x106.png',
    url: 'https://www.laregion.fr/'
  },
  home: {
    hero: {
      title: 'Occitanie Esport 2020',
      // subtitle: '',
      background: '/static/img/bg-blue-area.jpg',
      backgroundVideo: '/static/vid/oes-teaser-resized.mp4'
    },
    // banner: '/static/img/oes.jpg',
    twitterAccount: 'OccitanieEsport',
    partners: {
      active: false,
      delay: 10,
      count: 6
    }
  },
  news: {
    title: 'News',
    description: 'Retrouvez toutes les actualités de l\'Occitanie Esport 2020',
    link: '/news'
  },
  partners: {
    title: 'Partenaires',
    description: 'Retrouvez la liste de tous nos partenaires',
    link: '/partenaires'
  },
  tournaments: {
    title: 'Tournois',
    description: 'Tous les tournois de l\'Occitanie Esport 2020',
    link: '/tournois'
  },
  info: {
    title: 'Infos pratiques',
    description: 'Toutes les informations sur l\'Occitanie Esport 2020',
    link: '/infos'
  },
  schedule: {
    title: 'Programme',
    description: 'Le programme heure par heure pour tout l\'évènement',
    link: '/schedule'
  },
  live: {
    title: 'Live',
    description: 'Tous les streams et résultats en direct',
    link: '/live'
  },
  tickets: {
    title: 'Joueurs',
    description: 'Achetez vos places pour la Gamers Assembly : Occitanie Edition',
    link: '/billetterie',
    pass: {
      title: 'Pass Visiteur',
      text: 'Pour acheter un pass "Visiteur Occitanie Esports" ou un pass "Visiteur ESL Pro League Occitanie", suivre le lien ci-dessous',
      button: 'Acheter un billet visiteur'
    },
    minor: {
      title: 'Informations pour les mineurs',
      text: 'Vous devez télécharger l\'autorisation parentale, l\'imprimer, la remplir et l\'apporter le jour de votre venue avec votre billet.',
      button: 'Télécharger l\'autorisation parentale (format pdf)'
    },
    rules: {
      title: 'Règlement intérieur',
      text: 'L\'acquisition d\'un ticket entraîne l\'adhésion au règlement intérieur disponible ci-dessous.',
      button: 'Télécharger le règlement intérieur (format pdf)'
    }
  },
  staticTickets: {
    title: 'Visiteurs',
    iframeUrl: 'https://www.google.fr',
    description: 'Achetez vos places visiteurs pour l\'Occitanie Esport 2020',
    link: '/billetterie-visiteurs'
  },
  exhibitors: {
    title: 'Exposants',
    description: 'Les exposants que vous pourrez retrouver à l\'Occitanie Esport 2020',
    link: '/exposants'
  },
  family: {
    title: 'Espace Famille',
    description: 'Les activités à faire en famille durant l\'Occitanie Esport 2020',
    link: '/espace-famille'
  },
  influencers: {
    title: 'VIPs',
    description: 'Les personnalités qui seront présentes pour l\'Occitanie Esport 2020',
    link: '/vips'
  },
  contact: {
    active: true,
    pageId: 199742
  },
  press: {
    active: false,
    pageId: 7
  },
  legals: {
    active: true,
    pageId: 8
  },
  recruit: {
    active: false,
    title: 'Recrutement',
    description: 'Devenir bénévole pour l\'Occitanie Esport 2020, c\'est par ici !!!',
    formUrl: 'https://goo.gl/forms/84pHQfSp50RcuUel2'
  },
  social: {
    twitter: 'https://twitter.com/OccitanieEsport',
    facebook: 'https://www.facebook.com/OccitanieEsports',
    // twitch: 'https://twitch.tv/gamers_assembly',
    // youtube: 'https://www.youtube.com/channel/UCbfhRIAsc4xdRACnDUwRfRw',
    // flickr: 'https://www.flickr.com/photos/futurolan',
    discord: 'https://discord.me/occitanieesports'
  }
}

module.exports = config
