import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'
import { vercelDeployTool } from 'sanity-plugin-vercel-deploy';

export default defineConfig({
  name: 'default',
  title: 'Quirx Studio',

  projectId: 'ey2x3g8q',
  dataset: 'production',

  plugins: [structureTool(), visionTool(), vercelDeployTool()],

  schema: {
    types: schemaTypes,
  },
})
