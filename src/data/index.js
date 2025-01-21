import { useTranslation } from 'react-i18next';

export const usePlaces = () => {
  const { t } = useTranslation();

  const places = [
    {
      id: 1,

      image: require('../../assets/images/zamki/wawel1.jpg'),
      gallery: [
        require('../../assets/images/zamki/wawel2.jpg'),
        require('../../assets/images/zamki/wawel3.jpg'),
      ],


      lat: 50.0543,
      lon: 19.9353,
      googleMaps: 'https://maps.app.goo.gl/PM4oefNM65qPmvgz7',
      appleMaps: 'https://maps.app.goo.gl/PM4oefNM65qPmvgz7',
      location: 'Kraków',
      title: t('wawel.title'),
      description: t('wawel.description'),
      fullDescription: t('wawel.fullDescription'),
      architecturalStyle: t('wawel.architecturalStyle'),
      area: '7040 m²',
      completed: t('wawel.completed'),
      features: [
        t('wawel.feature.tower'),
        t('wawel.feature.chapel'),
        t('wawel.feature.den'),
      ],
      openingHours: t('wawel.openingHours'),
      ticketPrices: {
        adults: '20 PLN',
        children: '10 PLN',
      },
      type: 'castle',
    },
    {
      id: 2,

      image: require('../../assets/images/zamki/niepolomice1.jpg'),
      gallery: [
        require('../../assets/images/zamki/q2.jpg'),
        require('../../assets/images/zamki/q3.jpg'),
      ],


      lat: 50.0356,
      lon: 20.2191,
      googleMaps: 'https://goo.gl/maps/Bm8eEY8g3u3E2k3N6',
      appleMaps: 'https://maps.apple.com/?ll=50.0356,20.2191&q=Zamek+Niepołomice',
      location: 'Niepołomice',
      title: t('niepolomice.title'),
      description: t('niepolomice.description'),
      fullDescription: t('niepolomice.fullDescription'),
      architecturalStyle: t('niepolomice.architecturalStyle'),
      area: '3000 m²',
      completed: t('niepolomice.completed'),
      features: [
        t('niepolomice.feature.courtyard'),
        t('niepolomice.feature.chapel'),
        t('niepolomice.feature.tower'),
      ],
      openingHours: t('niepolomice.openingHours'),
      ticketPrices: {
        adults: '15 PLN',
        children: '8 PLN',
      },
      type: 'castle',
    },
    {
      id: 3,

      image: require('../../assets/images/zamki/pieskowa1.jpg'),
      gallery: [
        require('../../assets/images/zamki/pieskowa2.jpg'),
        require('../../assets/images/zamki/pieskowa3.jpg'),
      ],


      lat: 50.243881,
      lon: 19.780291,
      googleMaps: 'https://goo.gl/maps/2F9HnQkY3q82',
      appleMaps: 'https://maps.apple.com/?ll=50.2333,19.7644&q=Zamek+Pieskowa+Skała',
      location: 'Sułoszowa',
      title: t('pieskowa.title'),
      description: t('pieskowa.description'),
      fullDescription: t('pieskowa.fullDescription'),
      architecturalStyle: t('pieskowa.architecturalStyle'),
      area: '1500 m²',
      completed: t('pieskowa.completed'),
      features: [
        t('pieskowa.feature.defensive_walls'),
        t('pieskowa.feature.observation_tower'),
        t('pieskowa.feature.garden'),
      ],
      openingHours: t('pieskowa.openingHours'),
      ticketPrices: {
        adults: '12 PLN',
        children: '6 PLN',
      },
      type: 'castle',
    },
    {
      id: 4,

      image: require('../../assets/images/zamki/niedzica1.jpg'),
      gallery: [
        require('../../assets/images/zamki/q2.jpg'),
        require('../../assets/images/zamki/q3.jpg'),
      ],


      lat: 49.412758,
      lon: 20.319740,
      googleMaps: 'https://goo.gl/maps/yL8E1N9t8E82',
      appleMaps: 'https://maps.apple.com/?ll=49.4219,20.3185&q=Zamek+Dunajec+Niedzica',
      location: 'Niedzica',
      title: t('niedzica.title'),
      description: t('niedzica.description'),
      fullDescription: t('niedzica.fullDescription'),
      architecturalStyle: t('niedzica.architecturalStyle'),
      area: '2500 m²',
      completed: t('niedzica.completed'),
      features: [
        t('niedzica.feature.well'),
        t('niedzica.feature.tower'),
        t('niedzica.feature.museum'),
      ],
      openingHours: t('niedzica.openingHours'),
      ticketPrices: {
        adults: '18 PLN',
        children: '10 PLN',
      },
      type: 'castle',
    },
    {
      id: 5,

      image: require('../../assets/images/zamki/wisnicz1.jpg'),
      gallery: [
        require('../../assets/images/zamki/wisnicz2.jpg'),
        require('../../assets/images/zamki/wisnicz3.jpg'),
      ],


      lat: 49.9172,
      lon: 20.4717,
      googleMaps: 'https://goo.gl/maps/Jh1kN3JZK122',
      appleMaps: 'https://maps.apple.com/?ll=49.9172,20.4717&q=Zamek+Nowy+Wiśnicz',
      location: 'Nowy Wiśnicz',
      title: t('wisnicz.title'),
      description: t('wisnicz.description'),
      fullDescription: t('wisnicz.fullDescription'),
      architecturalStyle: t('wisnicz.architecturalStyle'),
      area: '4000 m²',
      completed: t('wisnicz.completed'),
      features: [
        t('wisnicz.feature.courtyard'),
        t('wisnicz.feature.tower'),
        t('wisnicz.feature.gate'),
      ],
      openingHours: t('wisnicz.openingHours'),
      ticketPrices: {
        adults: '14 PLN',
        children: '7 PLN',
      },
      type: 'castle',
    },
    {
      id: 6,

      image: require('../../assets/images/zamki/czorsztyn1.jpg'),
      gallery: [
        require('../../assets/images/zamki/q2.jpg'),
        require('../../assets/images/zamki/q3.jpg'),
      ],


      lat: 49.439059,
      lon: 20.312997,
      googleMaps: 'https://goo.gl/maps/1Y3uX9C3M282',
      appleMaps: 'https://maps.apple.com/?ll=49.4244,20.3108&q=Zamek+Królewski+Czorsztyn',
      location: 'Czorsztyn',
      title: t('czorsztyn.title'),
      description: t('czorsztyn.description'),
      fullDescription: t('czorsztyn.fullDescription'),
      architecturalStyle: t('czorsztyn.architecturalStyle'),
      area: '1500 m²',
      completed: t('czorsztyn.completed'),
      features: [
        t('czorsztyn.feature.ruins'),
        t('czorsztyn.feature.viewpoint'),
        t('czorsztyn.feature.walls'),
      ],
      openingHours: t('czorsztyn.openingHours'),
      ticketPrices: {
        adults: '10 PLN',
        children: '5 PLN',
      },
      type: 'ruin',
    },
    {
      id: 7,

      image: require('../../assets/images/zamki/oswiecim1.jpg'),
      gallery: [
        require('../../assets/images/zamki/q2.jpg'),
        require('../../assets/images/zamki/q3.jpg'),
      ],


      lat: 50.040312,
      lon: 19.219397,
      googleMaps: 'https://goo.gl/maps/8Q9xJ6CjW222',
      appleMaps: 'https://maps.apple.com/?ll=50.0364,19.2243&q=Zamek+Oświęcim',
      location: 'Oświęcim',
      title: t('oswiecim.title'),
      description: t('oswiecim.description'),
      fullDescription: t('oswiecim.fullDescription'),
      architecturalStyle: t('oswiecim.architecturalStyle'),
      area: '2000 m²',
      completed: t('oswiecim.completed'),
      features: [
        t('oswiecim.feature.tower'),
        t('oswiecim.feature.museum'),
        t('oswiecim.feature.courtyard'),
      ],
      openingHours: t('oswiecim.openingHours'),
      ticketPrices: {
        adults: '8 PLN',
        children: '4 PLN',
      },
      type: 'castle',
    },
    {
      id: 8,

      image: require('../../assets/images/zamki/spytkowice1.jpg'),
      gallery: [
        require('../../assets/images/zamki/q2.jpg'),
        require('../../assets/images/zamki/q3.jpg'),
      ],


      lat: 49.9767,
      lon: 19.5448,
      googleMaps: 'https://goo.gl/maps/9h1X3N9hX222',
      appleMaps: 'https://maps.apple.com/?ll=49.9767,19.5448&q=Zamek+Spytkowice',
      location: 'Spytkowice',
      title: t('spytkowice.title'),
      description: t('spytkowice.description'),
      fullDescription: t('spytkowice.fullDescription'),
      architecturalStyle: t('spytkowice.architecturalStyle'),
      area: '2500 m²',
      completed: t('spytkowice.completed'),
      features: [
        t('spytkowice.feature.archive'),
        t('spytkowice.feature.gothic_portal'),
        t('spytkowice.feature.park'),
      ],
      openingHours: t('spytkowice.openingHours'),
      ticketPrices: {
        adults: '0 PLN',
        children: '0 PLN',
      },
      type: 'castle',
    },
    {
      id: 9,

      image: require('../../assets/images/zamki/tenczyn1.jpg'),
      gallery: [
        require('../../assets/images/zamki/q2.jpg'),
        require('../../assets/images/zamki/q3.jpg'),
      ],


      lat: 50.1034,
      lon: 19.5795,
      googleMaps: 'https://goo.gl/maps/2E1Q8J9hX222',
      appleMaps: 'https://maps.apple.com/?ll=50.1034,19.5795&q=Zamek+Tenczyn+Rudno',
      location: 'Rudno',
      title: t('tenczyn.title'),
      description: t('tenczyn.description'),
      fullDescription: t('tenczyn.fullDescription'),
      architecturalStyle: t('tenczyn.architecturalStyle'),
      area: '3000 m²',
      completed: t('tenczyn.completed'),
      features: [
        t('tenczyn.feature.tower'),
        t('tenczyn.feature.gate'),
        t('tenczyn.feature.ruins'),
      ],
      openingHours: t('tenczyn.openingHours'),
      ticketPrices: {
        adults: '10 PLN',
        children: '6 PLN',
      },
      type: 'ruin',
    },
    {
      id: 10,

      image: require('../../assets/images/zamki/debno1.jpg'),
      gallery: [
        require('../../assets/images/zamki/q2.jpg'),
        require('../../assets/images/zamki/q3.jpg'),
      ],


      lat: 49.964210,
      lon: 20.715494,
      googleMaps: 'https://goo.gl/maps/3E1Q8J9hX222',
      appleMaps: 'https://maps.apple.com/?ll=49.9640,20.6076&q=Zamek+Dębno',
      location: 'Dębno',
      title: t('debno.title'),
      description: t('debno.description'),
      fullDescription: t('debno.fullDescription'),
      architecturalStyle: t('debno.architecturalStyle'),
      area: '1000 m²',
      completed: t('debno.completed'),
      features: [
        t('debno.feature.courtyard'),
        t('debno.feature.chapel'),
        t('debno.feature.museum'),
      ],
      openingHours: t('debno.openingHours'),
      ticketPrices: {
        adults: '12 PLN',
        children: '7 PLN',
      },
      type: 'castle',
    },
    {
      id: 11,

      image: require('../../assets/images/zamki/zator1.jpg'),
      gallery: [
        require('../../assets/images/zamki/q2.jpg'),
        require('../../assets/images/zamki/q3.jpg'),
      ],


      lat: 49.9994,
      lon: 19.4378,
      googleMaps: 'https://goo.gl/maps/4E1Q8J9hX222',
      appleMaps: 'https://maps.apple.com/?ll=49.9994,19.4378&q=Zamek+Zator',
      location: 'Zator',
      title: t('zator.title'),
      description: t('zator.description'),
      fullDescription: t('zator.fullDescription'),
      architecturalStyle: t('zator.architecturalStyle'),
      area: '1500 m²',
      completed: t('zator.completed'),
      features: [
        t('zator.feature.tower'),
        t('zator.feature.park'),
        t('zator.feature.neogothic_elements'),
      ],
      openingHours: t('zator.openingHours'),
      ticketPrices: {
        adults: '15 PLN',
        children: '8 PLN',
      },
      type: 'castle',
    },
    {
      id: 12,

      image: require('../../assets/images/zamki/sucha1.jpg'),
      gallery: [
        require('../../assets/images/zamki/q2.jpg'),
        require('../../assets/images/zamki/q3.jpg'),
      ],


      lat: 49.7463,
      lon: 19.6013,
      googleMaps: 'https://goo.gl/maps/5E1Q8J9hX222',
      appleMaps: 'https://maps.apple.com/?ll=49.7463,19.6013&q=Zamek+Sucha+Beskidzka',
      location: 'Sucha Beskidzka',
      title: t('sucha.title'),
      description: t('sucha.description'),
      fullDescription: t('sucha.fullDescription'),
      architecturalStyle: t('sucha.architecturalStyle'),
      area: '2000 m²',
      completed: t('sucha.completed'),
      features: [
        t('sucha.feature.galleries'),
        t('sucha.feature.tower'),
        t('sucha.feature.museum'),
      ],
      openingHours: t('sucha.openingHours'),
      ticketPrices: {
        adults: '15 PLN',
        children: '10 PLN',
      },
      type: 'castle',
    },
    {
      id: 13,

      image: require('../../assets/images/zamki/przegorzaly1.jpg'),
      gallery: [
        require('../../assets/images/zamki/q2.jpg'),
        require('../../assets/images/zamki/q3.jpg'),
      ],


      lat: 50.0504,
      lon: 19.8546,
      googleMaps: 'https://goo.gl/maps/6E1Q8J9hX222',
      appleMaps: 'https://maps.apple.com/?ll=50.0504,19.8546&q=Zamek+Przegorzały+Kraków',
      location: 'Kraków',
      title: t('przegorzaly.title'),
      description: t('przegorzaly.description'),
      fullDescription: t('przegorzaly.fullDescription'),
      architecturalStyle: t('przegorzaly.architecturalStyle'),
      area: '3000 m²',
      completed: t('przegorzaly.completed'),
      features: [
        t('przegorzaly.feature.view'),
        t('przegorzaly.feature.terrace'),
        t('przegorzaly.feature.hotel'),
      ],
      openingHours: t('przegorzaly.openingHours'),
      ticketPrices: {
        adults: '25 PLN', // For events or guided tours
        children: '15 PLN',
      },
      type: 'castle',
    },
    {
      id: 14,

      image: require('../../assets/images/zamki/dobczyce1.jpg'),
      gallery: [
        require('../../assets/images/zamki/q2.jpg'),
        require('../../assets/images/zamki/q3.jpg'),
      ],


      lat: 49.8723,
      lon: 20.0732,
      googleMaps: 'https://goo.gl/maps/7E1Q8J9hX222',
      appleMaps: 'https://maps.apple.com/?ll=49.8723,20.0732&q=Zamek+Dobczyce',
      location: 'Dobczyce',
      title: t('dobczyce.title'),
      description: t('dobczyce.description'),
      fullDescription: t('dobczyce.fullDescription'),
      architecturalStyle: t('dobczyce.architecturalStyle'),
      area: '1200 m²',
      completed: t('dobczyce.completed'),
      features: [
        t('dobczyce.feature.ruins'),
        t('dobczyce.feature.museum'),
        t('dobczyce.feature.viewpoint'),
      ],
      openingHours: t('dobczyce.openingHours'),
      ticketPrices: {
        adults: '7 PLN',
        children: '5 PLN',
      },
      type: 'ruin',
    },
    {
      id: 15,

      image: require('../../assets/images/zamki/tropsztyn1.jpg'),
      gallery: [
        require('../../assets/images/zamki/q2.jpg'),
        require('../../assets/images/zamki/q3.jpg'),
      ],


      lat: 49.796254,
      lon: 20.645033,
      googleMaps: 'https://goo.gl/maps/8E1Q8J9hX222',
      appleMaps: 'https://maps.apple.com/?ll=49.8431,20.6787&q=Zamek+Tropsztyn+Wytrzyszczka',
      location: 'Wytrzyszczka',
      title: t('tropsztyn.title'),
      description: t('tropsztyn.description'),
      fullDescription: t('tropsztyn.fullDescription'),
      architecturalStyle: t('tropsztyn.architecturalStyle'),
      area: '1000 m²',
      completed: t('tropsztyn.completed'),
      features: [
        t('tropsztyn.feature.view'),
        t('tropsztyn.feature.reconstruction'),
        t('tropsztyn.feature.legend'),
      ],
      openingHours: t('tropsztyn.openingHours'),
      ticketPrices: {
        adults: '20 PLN',
        children: '10 PLN',
      },
      type: 'castle',
    },
    {
      id: 16,

      image: require('../../assets/images/zamki/korzkiew1.jpg'),
      gallery: [
        require('../../assets/images/zamki/korzkiew2.jpg'),
        require('../../assets/images/zamki/korzkiew3.jpg'),
      ],


      lat: 50.1803,
      lon: 19.8811,
      googleMaps: 'https://goo.gl/maps/9E1Q8J9hX222',
      appleMaps: 'https://maps.apple.com/?ll=50.1803,19.8811&q=Zamek+Korzkiew',
      location: 'Korzkiew',
      title: t('korzkiew.title'),
      description: t('korzkiew.description'),
      fullDescription: t('korzkiew.fullDescription'),
      architecturalStyle: t('korzkiew.architecturalStyle'),
      area: '1500 m²',
      completed: t('korzkiew.completed'),
      features: [
        t('korzkiew.feature.restaurant'),
        t('korzkiew.feature.hotel'),
        t('korzkiew.feature.tower'),
      ],
      openingHours: t('korzkiew.openingHours'),
      ticketPrices: {
        adults: '0 PLN', // Access to the castle grounds is free, specific services like restaurant or hotel are charged separately
        children: '0 PLN',
      },
      type: 'castle',
    },
    {
      id: 17,

      image: require('../../assets/images/zamki/mirow1.jpg'),
      gallery: [
        require('../../assets/images/zamki/q2.jpg'),
        require('../../assets/images/zamki/q3.jpg'),
      ],


      lat: 50.4373,
      lon: 20.1817,
      googleMaps: 'https://goo.gl/maps/AE1Q8J9hX222',
      appleMaps: 'https://maps.apple.com/?ll=50.4373,20.1817&q=Zamek+na+Mirowie+Książ+Wielki',
      location: 'Książ Wielki',
      title: t('mirow.title'),
      description: t('mirow.description'),
      fullDescription: t('mirow.fullDescription'),
      architecturalStyle: t('mirow.architecturalStyle'),
      area: '1800 m²',
      completed: t('mirow.completed'),
      features: [
        t('mirow.feature.school'),
        t('mirow.feature.renesance_elements'),
        t('mirow.feature.park'),
      ],
      openingHours: t('mirow.openingHours'),
      ticketPrices: {
        adults: '0 PLN', // Not generally open for tourists, only for school events
        children: '0 PLN',
      },
      type: 'castle',
    },
    {
      id: 18,

      image: require('../../assets/images/zamki/rabsztyn1.jpg'),
      gallery: [
        require('../../assets/images/zamki/q2.jpg'),
        require('../../assets/images/zamki/q3.jpg'),
      ],


      lat: 50.299679,
      lon: 19.592777,
      googleMaps: 'https://goo.gl/maps/8QhDt2NNXPE2',
      appleMaps: 'https://maps.apple.com/?ll=50.3147,19.5374&q=Zamek+w+Rabsztynie',
      location: 'Rabsztyn',
      title: t('rabsztyn.title'),
      description: t('rabsztyn.description'),
      fullDescription: t('rabsztyn.fullDescription'),
      architecturalStyle: t('rabsztyn.architecturalStyle'),
      area: '1200 m²',
      completed: t('rabsztyn.completed'),
      features: [
        t('rabsztyn.feature.gothic_ruins'),
        t('rabsztyn.feature.viewing_platform'),
        t('rabsztyn.feature.museum'),
      ],
      openingHours: t('rabsztyn.openingHours'),
      ticketPrices: {
        adults: '10 PLN',
        children: '5 PLN',
      },
      type: 'ruin',
    },
    {
      id: 19,

      image: require('../../assets/images/zamki/lipowiec1.jpg'),
      gallery: [
        require('../../assets/images/zamki/q2.jpg'),
        require('../../assets/images/zamki/q3.jpg'),
      ],


      lat: 50.076851,
      lon: 19.445312,
      googleMaps: 'https://goo.gl/maps/8u5NZRxsG8R2',
      appleMaps: 'https://maps.apple.com/?ll=50.0781,19.5173&q=Zamek+Lipowiec',
      location: 'Lipowiec',
      title: t('lipowiec.title'),
      description: t('lipowiec.description'),
      fullDescription: t('lipowiec.fullDescription'),
      architecturalStyle: t('lipowiec.architecturalStyle'),
      area: '1500 m²',
      completed: t('lipowiec.completed'),
      features: [
        t('lipowiec.feature.gothic_castle'),
        t('lipowiec.feature.prison_history'),
        t('lipowiec.feature.nature_trail'),
      ],
      openingHours: t('lipowiec.openingHours'),
      ticketPrices: {
        adults: '8 PLN',
        children: '4 PLN',
      },
      type: 'ruin',
    },
    {
      id: 20,

      image: require('../../assets/images/zamki/melsztyn1.jpg'),
      gallery: [
        require('../../assets/images/zamki/q2.jpg'),
        require('../../assets/images/zamki/q3.jpg'),
      ],


      lat: 49.869479,
      lon: 20.771663,
      googleMaps: 'https://goo.gl/maps/XA2b7G8tkCz',
      appleMaps: 'https://maps.apple.com/?ll=49.8344,20.7369&q=Zamek+Melsztyn',
      location: 'Melsztyn',
      title: t('melsztyn.title'),
      description: t('melsztyn.description'),
      fullDescription: t('melsztyn.fullDescription'),
      architecturalStyle: t('melsztyn.architecturalStyle'),
      area: '900 m²',
      completed: t('melsztyn.completed'),
      features: [
        t('melsztyn.feature.ruins'),
        t('melsztyn.feature.panorama'),
        t('melsztyn.feature.history'),
      ],
      openingHours: t('melsztyn.openingHours'),
      ticketPrices: {
        adults: 'Free',
        children: 'Free',
      },
      type: 'ruin',
    },
    {
      id: 21,

      image: require('../../assets/images/zamki/czchow1.jpg'),
      gallery: [
        require('../../assets/images/zamki/q2.jpg'),
        require('../../assets/images/zamki/q3.jpg'),
      ],


      lat: 49.833142,
      lon: 20.677191,
      googleMaps: 'https://goo.gl/maps/K9c2HpBPtjm',
      appleMaps: 'https://maps.apple.com/?ll=49.8338,20.6867&q=Zamek+w+Czchowie',
      location: 'Czchów',
      title: t('czchow.title'),
      description: t('czchow.description'),
      fullDescription: t('czchow.fullDescription'),
      architecturalStyle: t('czchow.architecturalStyle'),
      area: '600 m²',
      completed: t('czchow.completed'),
      features: [
        t('czchow.feature.watchtower'),
        t('czchow.feature.history'),
        t('czchow.feature.panorama'),
      ],
      openingHours: t('czchow.openingHours'),
      ticketPrices: {
        adults: '5 PLN',
        children: '3 PLN',
      },
      type: 'ruin',
    },
    {
      id: 22,

      image: require('../../assets/images/zamki/marcinka1.jpg'),
      gallery: [
        require('../../assets/images/zamki/q2.jpg'),
        require('../../assets/images/zamki/q3.jpg'),
      ],


      lat: 49.989148,
      lon: 20.997174,
      googleMaps: 'https://goo.gl/maps/X8EhFt2NzwJ2',
      appleMaps: 'https://maps.apple.com/?ll=50.0359,21.0063&q=Zamek+na+Górze+Marcina',
      location: 'Tarnów',
      title: t('goraMarcina.title'),
      description: t('goraMarcina.description'),
      fullDescription: t('goraMarcina.fullDescription'),
      architecturalStyle: t('goraMarcina.architecturalStyle'),
      area: '1,200 m²',
      completed: t('goraMarcina.completed'),
      features: [
        t('goraMarcina.feature.ruins'),
        t('goraMarcina.feature.hiking'),
        t('goraMarcina.feature.panorama'),
      ],
      openingHours: t('goraMarcina.openingHours'),
      ticketPrices: {
        adults: 'Free',
        children: 'Free',
      },
      type: 'ruin',
    },
    {
      id: 23,

      image: require('../../assets/images/zamki/roznow1.jpg'),
      gallery: [
        require('../../assets/images/zamki/q2.jpg'),
        require('../../assets/images/zamki/q3.jpg'),
      ],


      lat: 49.767066,
      lon: 20.682127,
      googleMaps: 'https://goo.gl/maps/7Zcn7XD8Aqwq',
      appleMaps: 'https://maps.apple.com/?ll=49.7887,20.7121&q=Zamek+w+Rożnowie',
      location: 'Rożnów',
      title: t('roznów.title'),
      description: t('roznów.description'),
      fullDescription: t('roznów.fullDescription'),
      architecturalStyle: t('roznów.architecturalStyle'),
      area: '800 m²',
      completed: t('roznów.completed'),
      features: [
        t('roznów.feature.ruins'),
        t('roznów.feature.defensive_walls'),
        t('roznów.feature.scenic_location'),
      ],
      openingHours: t('roznów.openingHours'),
      ticketPrices: {
        adults: 'Free',
        children: 'Free',
      },
      type: 'ruin',
    },
    /*{
      id: 24,

      image: require('../../assets/images/zamki/q1.jpg'),
      gallery: [
        require('../../assets/images/zamki/q2.jpg'),
        require('../../assets/images/zamki/q3.jpg'),
      ],


      lat: 49.7912,
      lon: 20.7098,
      googleMaps: 'https://goo.gl/maps/qXYxq7PZ1Zn',
      appleMaps: 'https://maps.apple.com/?ll=49.7912,20.7098&q=Ruiny+Zamku+Rycerskiego+w+Rożnowie',
      location: 'Rożnów',
      title: t('rycerskiRoznow.title'),
      description: t('rycerskiRoznow.description'),
      fullDescription: t('rycerskiRoznow.fullDescription'),
      architecturalStyle: t('rycerskiRoznow.architecturalStyle'),
      area: '600 m²',
      completed: t('rycerskiRoznow.completed'),
      features: [
        t('rycerskiRoznow.feature.ruins'),
        t('rycerskiRoznow.feature.defensive_tower'),
        t('rycerskiRoznow.feature.scenic_hills'),
      ],
      openingHours: t('rycerskiRoznow.openingHours'),
      ticketPrices: {
        adults: 'Free',
        children: 'Free',
      },
      type: 'ruin',
    },*/
    /*{
      id: 25,

      image: require('../../assets/images/zamki/q1.jpg'),
      gallery: [
        require('../../assets/images/zamki/q2.jpg'),
        require('../../assets/images/zamki/q3.jpg'),
      ],


      lat: 49.4213,
      lon: 20.3123,
      googleMaps: 'https://goo.gl/maps/4xGPX6BZGvF2',
      appleMaps: 'https://maps.apple.com/?ll=49.4213,20.3123&q=Zamek+Dunajec',
      location: 'Niedzica',
      title: t('dunajec.title'),
      description: t('dunajec.description'),
      fullDescription: t('dunajec.fullDescription'),
      architecturalStyle: t('dunajec.architecturalStyle'),
      area: '1200 m²',
      completed: t('dunajec.completed'),
      features: [
        t('dunajec.feature.well_preserved'),
        t('dunajec.feature.gothic_tower'),
        t('dunajec.feature.scenic_river_view'),
      ],
      openingHours: t('dunajec.openingHours'),
      ticketPrices: {
        adults: '15 PLN',
        children: '10 PLN',
      },
      type: 'castle',
    },*/
    {
      id: 26,

      image: require('../../assets/images/zamki/myslenice1.jpg'),
      gallery: [
        require('../../assets/images/zamki/q2.jpg'),
        require('../../assets/images/zamki/q3.jpg'),
      ],


      lat: 49.8298,
      lon: 19.9372,
      googleMaps: 'https://goo.gl/maps/R9t5rPoZnE52',
      appleMaps: 'https://maps.apple.com/?ll=49.8298,19.9372&q=Zamek+w+Myślenicach',
      location: 'Myślenice',
      title: t('myslenice.title'),
      description: t('myslenice.description'),
      fullDescription: t('myslenice.fullDescription'),
      architecturalStyle: t('myslenice.architecturalStyle'),
      area: '500 m²',
      completed: t('myslenice.completed'),
      features: [
        t('myslenice.feature.ruins'),
        t('myslenice.feature.hiking_trail'),
        t('myslenice.feature.historical_significance'),
      ],
      openingHours: t('myslenice.openingHours'),
      ticketPrices: {
        adults: 'Free',
        children: 'Free',
      },
      type: 'ruin',
    },
    {
      id: 27,

      image: require('../../assets/images/zamki/muszyna1.jpg'),
      gallery: [
        require('../../assets/images/zamki/q2.jpg'),
        require('../../assets/images/zamki/q3.jpg'),
      ],


      lat: 49.354054,
      lon: 20.890647,
      googleMaps: 'https://goo.gl/maps/fLST4ovGVy62',
      appleMaps: 'https://maps.apple.com/?ll=49.4261,20.2661&q=Zamek+w+Muszynie',
      location: 'Muszyna',
      title: t('muszyna.title'),
      description: t('muszyna.description'),
      fullDescription: t('muszyna.fullDescription'),
      architecturalStyle: t('muszyna.architecturalStyle'),
      area: '800 m²',
      completed: t('muszyna.completed'),
      features: [
        t('muszyna.feature.museum'),
        t('muszyna.feature.medieval_ruins'),
        t('muszyna.feature.panorama_view'),
      ],
      openingHours: t('muszyna.openingHours'),
      ticketPrices: {
        adults: '10 PLN',
        children: '5 PLN',
      },
      type: 'ruin',
    },
    {
      id: 28,

      image: require('../../assets/images/zamki/rytro1.jpg'),
      gallery: [
        require('../../assets/images/zamki/q2.jpg'),
        require('../../assets/images/zamki/q3.jpg'),
      ],


      lat: 49.488922,
      lon: 20.686552,
      googleMaps: 'https://goo.gl/maps/8Q2tqJShj7B2',
      appleMaps: 'https://maps.apple.com/?ll=49.4667,20.4083&q=Zamek+w+Rytrze',
      location: 'Rytro',
      title: t('rytro.title'),
      description: t('rytro.description'),
      fullDescription: t('rytro.fullDescription'),
      architecturalStyle: t('rytro.architecturalStyle'),
      area: '450 m²',
      completed: t('rytro.completed'),
      features: [
        t('rytro.feature.situated_on_hill'),
        t('rytro.feature.panorama_view'),
        t('rytro.feature.historical_site'),
      ],
      openingHours: t('rytro.openingHours'),
      ticketPrices: {
        adults: '10 PLN',
        children: '5 PLN',
      },
      type: 'ruin',
    },
    {
      id: 29,

      image: require('../../assets/images/zamki/q1.jpg'),
      gallery: [
        require('../../assets/images/zamki/q2.jpg'),
        require('../../assets/images/zamki/q3.jpg'),
      ],


      lat: 49.9350,
      lon: 20.9031,
      googleMaps: 'https://goo.gl/maps/fR7Hf2fVX8F2',
      appleMaps: 'https://maps.apple.com/?ll=49.9350,20.9031&q=Wieża+obronna+w+Rzepienniku+Biskupim',
      location: 'Rzepiennik Biskupi',
      title: t('rzepiennikBiskupi.title'),
      description: t('rzepiennikBiskupi.description'),
      fullDescription: t('rzepiennikBiskupi.fullDescription'),
      architecturalStyle: t('rzepiennikBiskupi.architecturalStyle'),
      area: '100 m²',
      completed: t('rzepiennikBiskupi.completed'),
      features: [
        t('rzepiennikBiskupi.feature.defensive_tower'),
        t('rzepiennikBiskupi.feature.historical_landmark'),
        t('rzepiennikBiskupi.feature.panorama_view'),
      ],
      openingHours: t('rzepiennikBiskupi.openingHours'),
      ticketPrices: {
        adults: '5 PLN',
        children: '2 PLN',
      },
      type: 'ruin',
    },
    {
      id: 30,

      image: require('../../assets/images/zamki/szerzyny1.jpg'),
      gallery: [
        require('../../assets/images/zamki/q2.jpg'),
        require('../../assets/images/zamki/q3.jpg'),
      ],


      lat: 49.810758,
      lon: 21.243925,
      googleMaps: 'https://goo.gl/maps/2u3Q3akv9k62',
      appleMaps: 'https://maps.apple.com/?ll=49.7250,21.1833&q=Dwór+obronny+w+Szerzynach',
      location: 'Szerzyny',
      title: t('szerzyny.title'),
      description: t('szerzyny.description'),
      fullDescription: t('szerzyny.fullDescription'),
      architecturalStyle: t('szerzyny.architecturalStyle'),
      area: '500 m²',
      completed: t('szerzyny.completed'),
      features: [
        t('szerzyny.feature.defensive_manor'),
        t('szerzyny.feature.historical_landmark'),
        t('szerzyny.feature.village_atmosphere'),
      ],
      openingHours: t('szerzyny.openingHours'),
      ticketPrices: {
        adults: '6 PLN',
        children: '3 PLN',
      },
      type: 'manor',
    },
    {
      id: 31,

      image: require('../../assets/images/zamki/q1.jpg'),
      gallery: [
        require('../../assets/images/zamki/q2.jpg'),
        require('../../assets/images/zamki/q3.jpg'),
      ],


      lat: 49.5992,
      lon: 20.9801,
      googleMaps: 'https://goo.gl/maps/J7czA5WzPrq',
      appleMaps: 'https://maps.apple.com/?ll=49.5992,20.9801&q=Gród+w+Wojnarowej',
      location: 'Wojnarowa',
      title: t('wojnarowa.title'),
      description: t('wojnarowa.description'),
      fullDescription: t('wojnarowa.fullDescription'),
      architecturalStyle: t('wojnarowa.architecturalStyle'),
      area: '2000 m²',
      completed: t('wojnarowa.completed'),
      features: [
        t('wojnarowa.feature.early_medieval_fort'),
        t('wojnarowa.feature.historical_site'),
        t('wojnarowa.feature.scenic_view'),
      ],
      openingHours: t('wojnarowa.openingHours'),
      ticketPrices: {
        adults: '4 PLN',
        children: '2 PLN',
      },
      type: 'ruin',
    },
    {
      id: 32,

      image: require('../../assets/images/zamki/zbyszyce1.jpg'),
      gallery: [
        require('../../assets/images/zamki/q2.jpg'),
        require('../../assets/images/zamki/q3.jpg'),
      ],


      lat: 49.710948,
      lon: 20.663881,
      googleMaps: 'https://goo.gl/maps/1g4dVm76KcG3z',
      appleMaps: 'https://maps.apple.com/?ll=49.9687,21.5228&q=Dwór+obronny+w+Zbyszycach',
      location: 'Zbyszyce',
      title: t('zbyszyce.title'),
      description: t('zbyszyce.description'),
      fullDescription: t('zbyszyce.fullDescription'),
      architecturalStyle: t('zbyszyce.architecturalStyle'),
      area: '800 m²',
      completed: t('zbyszyce.completed'),
      features: [
        t('zbyszyce.feature.defensive_manor'),
        t('zbyszyce.feature.historical_site'),
        t('zbyszyce.feature.architectural_heritage'),
      ],
      openingHours: t('zbyszyce.openingHours'),
      ticketPrices: {
        adults: '5 PLN',
        children: '2 PLN',
      },
      type: 'manor',
    },
    {
      id: 33,

      image: require('../../assets/images/zamki/nowy_sacz1.jpg'),
      gallery: [
        require('../../assets/images/zamki/q2.jpg'),
        require('../../assets/images/zamki/q3.jpg'),
      ],


      lat: 49.6211,
      lon: 20.7187,
      googleMaps: 'https://goo.gl/maps/vv1jj9GqHe72',
      appleMaps: 'https://maps.apple.com/?ll=49.6211,20.7187&q=Zamek+w+Nowym+Sączu',
      location: 'Nowy Sącz',
      title: t('nowysacz.title'),
      description: t('nowysacz.description'),
      fullDescription: t('nowysacz.fullDescription'),
      architecturalStyle: t('nowysacz.architecturalStyle'),
      area: '1000 m²',
      completed: t('nowysacz.completed'),
      features: [
        t('nowysacz.feature.historical_castle'),
        t('nowysacz.feature.museum'),
        t('nowysacz.feature.panoramic_view'),
      ],
      openingHours: t('nowysacz.openingHours'),
      ticketPrices: {
        adults: '10 PLN',
        children: '5 PLN',
      },
      type: 'castle',
    },
    {
      id: 34,

      image: require('../../assets/images/zamki/q1.jpg'),
      gallery: [
        require('../../assets/images/zamki/q2.jpg'),
        require('../../assets/images/zamki/q3.jpg'),
      ],


      lat: 50.013222,
      lon: 19.789411,
      googleMaps: 'https://goo.gl/maps/3W3BQXkNmA92',
      appleMaps: 'https://maps.apple.com/?ll=50.3669,19.0731&q=Wieża+obronna+w+Piekarach',
      location: 'Piekary',
      title: t('piekary.title'),
      description: t('piekary.description'),
      fullDescription: t('piekary.fullDescription'),
      architecturalStyle: t('piekary.architecturalStyle'),
      area: '200 m²',
      completed: t('piekary.completed'),
      features: [
        t('piekary.feature.defensive_tower'),
        t('piekary.feature.military_history'),
        t('piekary.feature.architectural_heritage'),
      ],
      openingHours: t('piekary.openingHours'),
      ticketPrices: {
        adults: '7 PLN',
        children: '3 PLN',
      },
      type: 'ruin',
    },
    {
      id: 35,

      image: require('../../assets/images/zamki/skawina1.jpg'),
      gallery: [
        require('../../assets/images/zamki/q2.jpg'),
        require('../../assets/images/zamki/q3.jpg'),
      ],


      lat: 49.9875,
      lon: 19.8500,
      googleMaps: 'https://goo.gl/maps/HWq5rYjkg2C2',
      appleMaps: 'https://maps.apple.com/?ll=49.9875,19.8500&q=Zamek+w+Skawinie',
      location: 'Skawina',
      title: t('skawina.title'),
      description: t('skawina.description'),
      fullDescription: t('skawina.fullDescription'),
      architecturalStyle: t('skawina.architecturalStyle'),
      area: '1200 m²',
      completed: t('skawina.completed'),
      features: [
        t('skawina.feature.medieval_castle'),
        t('skawina.feature.historical_significance'),
        t('skawina.feature.archaeological_site'),
      ],
      openingHours: t('skawina.openingHours'),
      ticketPrices: {
        adults: '8 PLN',
        children: '4 PLN',
      },
      type: 'ruin',
    },
    {
      id: 36,

      image: require('../../assets/images/zamki/branice1.jpg'),
      gallery: [
        require('../../assets/images/zamki/q2.jpg'),
        require('../../assets/images/zamki/q3.jpg'),
      ],


      lat: 50.068657,
      lon: 20.134538,
      googleMaps: 'https://goo.gl/maps/2fTXZT1EGD92',
      appleMaps: 'https://maps.apple.com/?ll=50.3471,18.4745&q=Dwór+obronny+w+Branicach',
      location: 'Branice',
      title: t('branicach.title'),
      description: t('branicach.description'),
      fullDescription: t('branicach.fullDescription'),
      architecturalStyle: t('branicach.architecturalStyle'),
      area: '1500 m²',
      completed: t('branicach.completed'),
      features: [
        t('branicach.feature.defensive_mansion'),
        t('branicach.feature.renaissance_architecture'),
        t('branicach.feature.historical_monument'),
      ],
      openingHours: t('branicach.openingHours'),
      ticketPrices: {
        adults: '10 PLN',
        children: '5 PLN',
      },
      type: 'manor',
    },
    {
      id: 37,

      image: require('../../assets/images/zamki/szymbark1.jpg'),
      gallery: [
        require('../../assets/images/zamki/q2.jpg'),
        require('../../assets/images/zamki/q3.jpg'),
      ],


      lat: 49.620562,
      lon: 21.094786,
      googleMaps: 'https://goo.gl/maps/X4gwp2fER9JzSHwW6',
      appleMaps: 'https://maps.apple.com/?ll=49.8156,18.8658&q=Kasztel+w+Szymbarku',
      location: 'Szymbark',
      title: t('szymbark.title'),
      description: t('szymbark.description'),
      fullDescription: t('szymbark.fullDescription'),
      architecturalStyle: t('szymbark.architecturalStyle'),
      area: '1600 m²',
      completed: t('szymbark.completed'),
      features: [
        t('szymbark.feature.medieval_castle'),
        t('szymbark.feature.historical_site'),
        t('szymbark.feature.tourist_attraction'),
      ],
      openingHours: t('szymbark.openingHours'),
      ticketPrices: {
        adults: '12 PLN',
        children: '6 PLN',
      },
      type: 'castle',
    },
    {
      id: 38,

      image: require('../../assets/images/zamki/koci_zamek1.jpg'),
      gallery: [
        require('../../assets/images/zamki/q2.jpg'),
        require('../../assets/images/zamki/q3.jpg'),
      ],


      lat: 50.013007,
      lon: 20.982748,
      googleMaps: 'https://goo.gl/maps/2T79bTshy2w',
      appleMaps: 'https://maps.apple.com/?ll=50.0154,20.9849&q=Koci+Zamek+w+Tarnowie',
      location: 'Tarnów',
      title: t('koci_zamek.title'),
      description: t('koci_zamek.description'),
      fullDescription: t('koci_zamek.fullDescription'),
      architecturalStyle: t('koci_zamek.architecturalStyle'),
      area: '1200 m²',
      completed: t('koci_zamek.completed'),
      features: [
        t('koci_zamek.feature.renaissance_style'),
        t('koci_zamek.feature.historical_monument'),
        t('koci_zamek.feature.tourist_attraction'),
      ],
      openingHours: t('koci_zamek.openingHours'),
      ticketPrices: {
        adults: '8 PLN',
        children: '4 PLN',
      },
      type: 'castle',
    },
    {
      id: 39,

      image: require('../../assets/images/zamki/ojcow1.jpg'),
      gallery: [
        require('../../assets/images/zamki/q2.jpg'),
        require('../../assets/images/zamki/q3.jpg'),
      ],


      lat: 50.211402,
      lon: 19.830288,
      googleMaps: 'https://goo.gl/maps/wveJ2zAY6En2',
      appleMaps: 'https://maps.apple.com/?ll=50.2250,19.7450&q=Ruiny+zamku+w+Ojcowie',
      location: 'Ojców',
      title: t('ojcow_ruins.title'),
      description: t('ojcow_ruins.description'),
      fullDescription: t('ojcow_ruins.fullDescription'),
      architecturalStyle: t('ojcow_ruins.architecturalStyle'),
      area: '800 m²',
      completed: t('ojcow_ruins.completed'),
      features: [
        t('ojcow_ruins.feature.medieval_ruins'),
        t('ojcow_ruins.feature.nature_reserve'),
        t('ojcow_ruins.feature.tourist_attraction'),
      ],
      openingHours: t('ojcow_ruins.openingHours'),
      ticketPrices: {
        adults: '5 PLN',
        children: '2 PLN',
      },
      type: 'ruin',
    },
    {
      id: 40,

      image: require('../../assets/images/zamki/wieruszyce1.jpg'),
      gallery: [
        require('../../assets/images/zamki/q2.jpg'),
        require('../../assets/images/zamki/q3.jpg'),
      ],


      lat: 50.4876,
      lon: 20.5678,
      googleMaps: 'https://goo.gl/maps/zyEqoeJik9t',
      appleMaps: 'https://maps.apple.com/?ll=50.4876,20.5678&q=Dwór+Obronny+Wieruskich+Wieruszyce',
      location: 'Wieruszyce',
      title: t('wieruszyce_manor.title'),
      description: t('wieruszyce_manor.description'),
      fullDescription: t('wieruszyce_manor.fullDescription'),
      architecturalStyle: t('wieruszyce_manor.architecturalStyle'),
      area: '1500 m²',
      completed: t('wieruszyce_manor.completed'),
      features: [
        t('wieruszyce_manor.feature.defensive_mansion'),
        t('wieruszyce_manor.feature.renaissance_elements'),
        t('wieruszyce_manor.feature.historical_monument'),
      ],
      openingHours: t('wieruszyce_manor.openingHours'),
      ticketPrices: {
        adults: '10 PLN',
        children: '5 PLN',
      },
      type: 'manor',
    },
  ];
  /*
  export const TOP_PLACES = PLACES.filter(place =>
    [4, 5, 7].includes(place.id)
  );
  
  export const POPULAR = PLACES.filter(place =>
    [1, 2, 3, 6].includes(place.id)
  );
  
  export const FAVORITE = PLACES.filter(place =>
    [1, 2, 3].includes(place.id)
  );
  
  export const ALL = PLACES.filter(place =>
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40].includes(place.id)
  );
  
  export const SEARCH_PLACES = [...PLACES].map(item => ({
    ...item,
    id: Math.random().toString(),
  }));
  
  export const SEARCH_HOTELS = [...PLACES].map(item => ({
    ...item,
    id: Math.random().toString(),
  }));
  
  /*export const SEARCH_HOTELS = [...Object.values(HOTELS)].map(item => ({
    ...item,
    id: Math.random().toString(),
  }));
  
  export const SEARCH_ALL = [...SEARCH_PLACES, ...SEARCH_HOTELS];
  
  export const getTranslatedPlaces = () => {
    return PLACES.map(place => ({
      ...place,
      title: t(place.title),
      description: t(place.description),
      // ... inne pola do tłumaczenia
    }));
  };*/

  return {
    allPlaces: places,
    newPlaces: places.filter(place => [4, 5, 7].includes(place.id)),
    popular: places.filter(place => [1, 2, 3, 4].includes(place.id)),
    favorites: places.filter(place => [1, 2, 3].includes(place.id)),
  };
};
