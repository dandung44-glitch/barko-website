import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'

export default defineConfig({
  name: 'barko',
  title: 'BARKO Admin Panel',

  projectId: '2968e3mt',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Panel Admin BARKO')
          .items([
            S.item()
              .title('Pengaturan Situs')
              .id('pengaturanSitus')
              .child(
                S.document()
                  .schemaType('pengaturanSitus')
                  .documentId('pengaturanSitus')
              ),
            S.divider(),
            S.documentTypeListItem('menu').title('Menu & Minuman'),
            S.documentTypeListItem('cottage').title('Cottage'),
            S.documentTypeListItem('galeri').title('Galeri Foto'),
            S.documentTypeListItem('peternakan').title('Aktivitas Peternakan'),
            S.documentTypeListItem('paketAcara').title('Paket Acara'),
            S.documentTypeListItem('faq').title('FAQ'),
            S.documentTypeListItem('bestTime').title('Waktu Terbaik Kunjungan'),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
