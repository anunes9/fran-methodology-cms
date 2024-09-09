import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {documentInternationalization} from '@sanity/document-internationalization'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Fran Methodology Cms',
  projectId: process.env.SANITY_STUDIO_PROJECT_ID!,
  dataset: process.env.SANITY_STUDIO_PROJECT_DATASET!,
  plugins: [
    structureTool(),
    visionTool(),
    documentInternationalization({
      // Required configuration
      supportedLanguages: [
        {id: 'en', title: 'EN - '},
        {id: 'pt', title: 'PT - '},
      ],
      schemaTypes: ['mesocycle'],
    }),
  ],
  schema: {
    types: schemaTypes,
  },
})
