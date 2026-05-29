import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

export default withMermaid(
  defineConfig({
  title: 'zymDev Wiki',
  description: 'Documentación oficial de zymDev y framework core',
  srcDir: 'profile',
  cleanUrls: true,
  lang: 'es-ES',
  themeConfig: {
    outline: {
      label: 'En esta página'
    },
    docFooter: {
      prev: 'Página anterior',
      next: 'Siguiente página'
    },
    sidebarMenuLabel: 'Menú',
    returnToTopLabel: 'Volver arriba',
    darkModeSwitchLabel: 'Aspecto',
    lightModeSwitchTitle: 'Cambiar a modo claro',
    darkModeSwitchTitle: 'Cambiar a modo oscuro',
    nav: [
      { text: 'Inicio', link: '/' },
      { text: 'zymDev Core', link: '/pages/zymdev-core' },
      { text: 'Versión Actual (v5.0.4)', link: '/pages/versions/v5.0.4' }
    ],

    sidebar: [
      {
        text: 'Introducción',
        items: [
          { text: 'Sobre Nosotros', link: '/' },
          { text: 'zymDev Core Framework', link: '/pages/zymdev-core' }
        ]
      },
      {
        text: 'Versiones 5.x',
        collapsed: false,
        items: [
          { text: 'v5.0.4 (Actual)', link: '/pages/versions/v5.0.4' },
          { text: 'v5.0.3', link: '/pages/versions/v5.0.3' },
          { text: 'v5.0.2', link: '/pages/versions/v5.0.2' },
          { text: 'v5.0.1', link: '/pages/versions/v5.0.1' },
          { text: 'v5.0.0', link: '/pages/versions/v5.0.0' }
        ]
      },
      {
        text: 'Versiones 4.4.x',
        collapsed: true,
        items: [
          { text: 'v4.4.3', link: '/pages/versions/v4.4.3' },
          { text: 'v4.4.2', link: '/pages/versions/v4.4.2' },
          { text: 'v4.4.1', link: '/pages/versions/v4.4.1' },
          { text: 'v4.4.0', link: '/pages/versions/v4.4.0' }
        ]
      },
      {
        text: 'Versiones 4.3.x',
        collapsed: true,
        items: [
          { text: 'v4.3.9', link: '/pages/versions/v4.3.9' },
          { text: 'v4.3.8', link: '/pages/versions/v4.3.8' },
          { text: 'v4.3.7', link: '/pages/versions/v4.3.7' },
          { text: 'v4.3.6', link: '/pages/versions/v4.3.6' },
          { text: 'v4.3.5', link: '/pages/versions/v4.3.5' },
          { text: 'v4.3.4', link: '/pages/versions/v4.3.4' },
          { text: 'v4.3.3', link: '/pages/versions/v4.3.3' },
          { text: 'v4.3.2', link: '/pages/versions/v4.3.2' },
          { text: 'v4.3.1', link: '/pages/versions/v4.3.1' },
          { text: 'v4.3.0', link: '/pages/versions/v4.3.0' }
        ]
      },
      {
        text: 'Versiones 4.2.x',
        collapsed: true,
        items: [
          { text: 'v4.2.7', link: '/pages/versions/v4.2.7' },
          { text: 'v4.2.6', link: '/pages/versions/v4.2.6' },
          { text: 'v4.2.5', link: '/pages/versions/v4.2.5' },
          { text: 'v4.2.4', link: '/pages/versions/v4.2.4' },
          { text: 'v4.2.3', link: '/pages/versions/v4.2.3' },
          { text: 'v4.2.2', link: '/pages/versions/v4.2.2' },
          { text: 'v4.2.1', link: '/pages/versions/v4.2.1' },
          { text: 'v4.2.0', link: '/pages/versions/v4.2.0' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/zymdevTeam' }
    ],

    footer: {
      message: 'Desarrollado con ❤️ por zymDev Team.',
      copyright: 'Copyright © 2026-present zymDev'
    }
  }
})
)
