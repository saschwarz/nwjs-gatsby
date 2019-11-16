import Provider from './Provider'
import {dark} from 'mdx-deck/themes'

export default {
  ...dark,
  // font: '"Raleway", sans-serif',
  Provider,
  h1: {
    textTransform: 'uppercase',
    fontWeight: 900
  },
  h2: {
    color: 'white'
  },
  p: {
    color: 'white',
    fontFamily: '"Raleway", arial',
    fontSize: '39px'
  },
  monospace: '"Dank Mono", monospace',
  weights: 400,
  img: {
    maxHeight: '80vh',
    maxWidth: '100%'
  },
  li: {
    paddingBottom: '20px',
    fontFamily: '"Raleway", arial',
    color: 'white',
    fontSize: '30px',
    lineHeight: 1.5
  },
  ul: {
    paddingLeft: '50px',
    display: 'inline-block'
  },
  colors: {
    text: '#d9bae8',
    background: 'rgb(1, 22, 39)',
    link: '#fff'
  }
}
