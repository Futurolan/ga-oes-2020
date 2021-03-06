const config = {
  title: 'Occitanie Esports 2020',
  logo: '/static/img/oes_100x100.png',
  description: 'L\'Occitanie Esports 2020 aura lieu du 30 au 31 mai 2020 !',
  metaImagePath: '/static/img/oes_100x100.png',
  gaTrackingId: 'UA-128777022-10',
  mainPartner: {
    logo: '/static/img/logo-occitanie-238x106.png',
    url: 'https://www.laregion.fr/'
  },
  home: {
    hero: {
      title: 'Occitanie Esports 2020',
      // subtitle: '',
      background: '/static/img/oes_bg.jpg',
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
    description: 'Retrouvez toutes les actualités de l\'Occitanie Esports 2020',
    link: '/news'
  },
  partners: {
    title: 'Partenaires',
    description: 'Retrouvez la liste de tous nos partenaires',
    link: '/partenaires'
  },
  tournaments: {
    title: 'Tournois',
    navTitle: '<img src="/static/img/tournoisga.png" style="max-height:none">',
    description: 'Tous les tournois de l\'Occitanie Esports 2020',
    notification: '<div class="columns is-vcentered has-text-centered"><div class="column is-2"><img src="/static/img/logo_ga_oes.png"></div><div class="column">Il ne peut pas y avoir d\'Occitanie Esports sans sa Gamers Assembly et son lot de tournois !<br>Voici donc tous les tournois aussi esports et fun les uns que les autres mais surtout le plus important : des tournois "GA certified".</div></div>',
    link: '/tournois'
  },
  info: {
    title: 'Infos pratiques',
    description: 'Toutes les informations sur l\'Occitanie Esports 2020',
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
    link: '/joueurs',
    pass: {
      title: 'Pass Visiteur',
      text: 'Pour acheter un pass "Visiteur Occitanie Esports", cliquer le lien ci-dessous',
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
    iframeUrl: 'https://www.ticketmaster.fr/fr/liste/occitanie-esport-2020-billet/idlist/20/idtier/21993963',
    description: 'Achetez vos places visiteurs pour l\'Occitanie Esports 2020',
    link: '/visiteurs'
  },
  exhibitors: {
    title: 'Exposants',
    description: 'Les exposants que vous pourrez retrouver à l\'Occitanie Esports 2020',
    link: '/exposants'
  },
  family: {
    title: 'Espace Famille',
    description: 'Les activités à faire en famille durant l\'Occitanie Esports 2020',
    link: '/espace-famille'
  },
  influencers: {
    title: 'VIPs',
    description: 'Les personnalités qui seront présentes pour l\'Occitanie Esports 2020',
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
    description: 'Devenir bénévole pour l\'Occitanie Esports 2020, c\'est par ici !!!',
    formUrl: 'https://goo.gl/forms/84pHQfSp50RcuUel2'
  },
  social: {
    twitter: 'https://twitter.com/OccitanieEsport',
    facebook: 'https://www.facebook.com/OccitanieEsports',
    // twitch: 'https://twitch.tv/gamers_assembly',
    // youtube: 'https://www.youtube.com/channel/UCbfhRIAsc4xdRACnDUwRfRw',
    // flickr: 'https://www.flickr.com/photos/futurolan',
    discord: 'https://discord.me/occitanieesports',
    instagram: 'https://www.instagram.com/occitanie_esports/'
  }
}

module.exports = config
