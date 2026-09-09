import { defineMermaidSetup } from '@slidev/types'

export default defineMermaidSetup(async () => {
  // Mermaid measures labels before drawing; load the handwriting font first.
  await document.fonts.load('22px "Patrick Hand"')

  return {
    theme: 'base',
    fontFamily: '"Avenir Next", Inter, ui-sans-serif, system-ui, sans-serif',
    // Slidev renders diagrams in a shadow root, outside the theme's stylesheets.
    themeCSS: '.node rect { rx: 8px; ry: 8px; }',
    flowchart: {
      curve: 'basis',
      padding: 16,
      nodeSpacing: 30,
      rankSpacing: 36,
    },
    themeVariables: {
      background: '#f8f7f4',
      primaryColor: '#ffffff',
      primaryTextColor: '#242b30',
      primaryBorderColor: '#f45100',
      lineColor: '#626761',
      secondaryColor: '#fff0e5',
      secondaryTextColor: '#242b30',
      secondaryBorderColor: '#ad640c',
      tertiaryColor: '#fdfcfb',
      tertiaryTextColor: '#242b30',
      tertiaryBorderColor: '#deddd7',
      edgeLabelBackground: '#f8f7f4',
      clusterBkg: '#fdfcfb',
      clusterBorder: '#deddd7',
    },
  }
})
