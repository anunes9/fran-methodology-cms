export default {
  name: 'mesocycle',
  title: 'Mesocycle',
  type: 'document',
  fields: [
    {name: 'slug', title: 'Slug', type: 'string'},
    {name: 'language', type: 'string'},
    {name: 'title', title: 'Title', type: 'string'},
    {name: 'concept', title: 'Concept', type: 'string'},
    {name: 'description', title: 'Description', type: 'text'},
    {name: 'duration', title: 'Duration', type: 'string'},
    {name: 'level', title: 'Level', type: 'reference', to: [{type: 'level'}]},
    {name: 'details', title: 'Details', type: 'array', of: [{type: 'mesocycleDetails'}]},
  ],
}
