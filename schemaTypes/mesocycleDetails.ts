export default {
  name: 'mesocycleDetails',
  title: 'Mesocycle Details',
  type: 'document',
  fields: [
    {name: 'title', title: 'Title', type: 'string'},
    {name: 'description', title: 'Description', type: 'text'},
    {name: 'details', title: 'Details', type: 'array', of: [{type: 'string'}]},
    {
      name: 'section',
      title: 'Section',
      type: 'object',
      fields: [
        {name: 'title', title: 'Title', type: 'string'},
        {name: 'description', title: 'Description', type: 'text'},
        {name: 'details', title: 'Details', type: 'array', of: [{type: 'string'}]},
      ],
    },
  ],
}
