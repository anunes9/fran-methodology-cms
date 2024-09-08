export default {
  name: 'mesocycle',
  title: 'Mesocycle',
  type: 'document',
  fields: [
    {name: 'slug', title: 'Slug', type: 'string'},
    {name: 'language', type: 'string', readOnly: true, hidden: true},
    {name: 'title', title: 'Title', type: 'string'},
    {name: 'concept', title: 'Concept', type: 'string'},
    {name: 'description', title: 'Description', type: 'text'},
    {name: 'level', title: 'Level', type: 'reference', to: [{type: 'level'}]},
    {name: 'duration', title: 'Duration', type: 'string'},
    {
      name: 'icon',
      title: 'Icon',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {name: 'details', title: 'Details', type: 'array', of: [{type: 'mesocycle-details'}]},
  ],
}
