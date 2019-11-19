const createArticle = () => ({
  _id: 'article123',
  // state: 'Published', // [ 'Draft', 'Published', 'Archived', 'Trashed' ]
  // type: 'Standard', // articleTypes

  headline: 'Example Headline',
  // shortHeadline: 'Short Headline',
  sell: 'Sell text to entice a reader to click-through to article',

  slug: '/article',

  // sections: ['News', 'Recent'], // TODO: review

  authorId: 'author123',

  // body: { widgets: [] },

  // videoId: '123',
  // videoProvider: 'YouTube',
  // startTime: 0,

  // readDurationTitle: 'Read duration title',
  // readDurationLength: 5,

  // images: { widgets: [] },

  // alertMessage: 'Example alert message',

  // countdownDate: new Date('2020-01-01'),
  // countdownLabel: 'Countdown label',

  displayDate: new Date('2019-01-01')
  // liveDate: new Date('2019-01-01'),
  // expiryDate: new Date('2021-01-01'),
  // dateCreated: new Date('2019-01-01'),

  // tags: ['Tag 1', 'Tag 2', 'Tag 3'], // TODO: review

  // metaTitle: 'Meta Title', // TODO: rename to SEO Title?
  // metaDescription: 'Meta Description', // TODO: rename to SEO Description?
  // shareTitle: 'Share Title', // TODO: rename to Social Title?
  // shareDescription: 'Share Description' // TODO: rename to Social Description?
})

export default createArticle
