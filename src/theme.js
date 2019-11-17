import Provider from './Provider'
import { dark } from 'mdx-deck/themes'

export default {
  ...dark,
  Provider,
  styles: {
    h1: {
      fontSize: '1.7em',
    },
    h2: {
      fontSize: '1.5em',
    },
    h3: {
      fontSize: '1.3em',
    },
    h4: {
      fontSize: '1.1em',
      marginBlockStart: '1em',
    },
    p: {
      fontFamily: '"Raleway", arial',
      fontSize: '0.8em',
    },
    monospace: '"Dank Mono", monospace',
    img: {
      maxHeight: '80vh',
      maxWidth: '100%'
    },
    li: {
      paddingBottom: '20px',
      fontFamily: '"Raleway", arial',
      fontSize: '0.9em',
      lineHeight: '1.5em',
    },
    pre: {
      fontSize: '30px',
    },
    a: {
      color: 'link',
    }
  },
  colors: {
    text: '#d9bae8',
    background: 'rgb(1, 22, 39)',
    link: '#8A4BAF'
  }
}
