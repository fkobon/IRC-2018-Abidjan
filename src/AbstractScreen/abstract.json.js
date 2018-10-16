let day1Json = [
  {
    startTime: '7:00',
    endTime: '9:00',
    title: 'Registration'
  },
  {
    startTime: '9:00',
    endTime: '10:00',
    title: 'Opening Ceremony'
  },
  {
    startTime: '10:00',
    endTime: '10:30',
    title: 'Cocoa/Coffee/tea break'
  },
  {
    startTime: '10:30',
    endTime: '12:00',
    title: 'Keynote Speeches'
  },
  {
    startTime: '12:00',
    endTime: '12:30',
    title: 'Discussions'
  },
  {
    startTime: '12:300',
    endTime: '14:30',
    title: 'Lunch Break'
  },
  {
    startTime: '14:30',
    endTime: '16:00',
    title: 'Session'
  },
  {
    startTime: '16:00',
    endTime: '16:30',
    title: 'Cocoa/Coffee/tea break'
  },
  {
    startTime: '16:30',
    endTime: '18:00',
    title: 'Session Cont.'
  },
  {
    startTime: '18:00',
    endTime: '18:00',
    title: 'End of Day 1'
  }
];

let day2Json = [
  {
    startTime: '8:30',
    endTime: '10:30',
    title: 'Session'
  },
  {
    startTime: '10:30',
    endTime: '11:00',
    title: 'Cocoa/Coffee/tea break'
  },
  {
    startTime: '11:00',
    endTime: '12:30',
    title: 'Session Cont.'
  },
  {
    startTime: '12:30',
    endTime: '14:00',
    title: 'Lunch Break'
  },
  {
    startTime: '14:00',
    endTime: '16:00',
    title: 'Session Cont.'
  },
  {
    startTime: '16:00',
    endTime: '16:30',
    title: 'Cocoa/Coffee/tea break'
  },
  {
    startTime: '16:30',
    endTime: '17:15',
    title: 'Panel Discussion'
  },
  {
    startTime: '17:15',
    endTime: '17:30',
    title: 'Closing Remarks'
  },
  {
    startTime: '19:00',
    endTime: '21:30',
    title: 'Gala Dinner'
  },
  {
    startTime: '21:30',
    endTime: '21:30',
    title: 'End of Day 2'
  }
];

let day3Json = [
  {
    startTime: '7:00',
    endTime: '17:00',
    title: 'Full Day Field Visit',
    option: [
      {
        name: 'Option A',
        location: 'Dabou',
        description: 'Visit of the rubber estate (plantations & factory) of the Compagnie des Caoutchoucs du Pakidié de Dabou (CCP Dabou); and a small rubber holding.'
      },
      {
        name: 'Option B',
        location: 'Exponent',
        description: 'The quarantine site of clones introduced as part of the IRRDB multilateral clone exchange Program; and the International Coconut Genebank for Africa and the Indian Ocean.'
      }
    ]
  }
];

let day4Json = [
  {
    startTime: '9:00',
    endTime: '14:00',
    title: 'Annual meeting of Directors & CEO of IRRDB'
  }
];

let day5Json = [
  {
    startTime: '9:00',
    endTime: '14:00',
    title: 'IRRDB Board meeting'
  }
];
/* let dayNJson = [
  {
    startTime: '10:00',
    endTime: '10:30',
    title: 'Team × Technology',
    speaker: {
      name: 'James Ide',
      company: 'Exponent',
      avatarUrl: 'http://conf.reactjs.com/img/james-ide.jpg'
    },
    description: [
      'With React Native, mobile developers are able to increase both their productivity and scope of work. The cross-platform technology is fantastic for teams building for Android and iOS, and developers can take ownership of products & features instead of single-platform implementations.',
      'At Exponent we’ve extended this idea to include both products and infrastructure. I’ll talk a bit about how we apply this to our software development and the benefits and challenges of growing full-stack developers into cross-stack mobile developers who are responsible for Android and iOS.'
    ]
  }
]; */

module.exports = {
  'Day 1': day1Json,
  'Day 2': day2Json,
  'Day 3': day3Json,
  'Day 4': day4Json,
  'Day 5': day5Json
};
