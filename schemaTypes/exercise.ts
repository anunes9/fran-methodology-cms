export default {
  name: 'exercise',
  title: 'Exercise',
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
    {name: 'image', title: 'Image', type: 'image'},
  ],
}
