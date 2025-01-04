export default {
  name: 'video',
  title: 'Video',
  type: 'document',
  fields: [
    {
      name: 'slug',
      title: 'Slug',
      type: 'string',
      validation: (rule) => rule.required().min(4).max(20),
    },
    {
      name: 'mesocycle',
      title: 'Mesocycle Slug',
      type: 'string',
      validation: (rule) => rule.required().min(4).max(20),
    },
    {name: 'title', title: 'Title', type: 'string'},
    {name: 'description', title: 'Description', type: 'text'},
    {name: 'source', title: 'Source', type: 'string'},
  ],
}
