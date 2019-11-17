import Provider from './Provider'
import { dark } from 'mdx-deck/themes'

export default {
  ...dark,
  Provider,
  styles: {
    h4: {
      marginBlockStart: '1em',
    },
    p: {
      fontFamily: '"Raleway", arial',
      fontSize: '1em',
    },
    monospace: '"Dank Mono", monospace',
    img: {
      maxHeight: '80vh',
      maxWidth: '100%'
    },
    li: {
      paddingBottom: '20px',
      fontFamily: '"Raleway", arial',
      fontSize: '1em',
      lineHeight: '2em',
    },
    ul: {
      display: 'inline-block'
    },
  },
  colors: {
    text: '#d9bae8',
    background: 'rgb(1, 22, 39)',
    link: '#d9bae8'
  }
}
