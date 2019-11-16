import React, { Fragment } from 'react'
import styled, { createGlobalStyle } from 'styled-components'

import Footer from './footer'
import { useDeck } from 'gatsby-theme-mdx-deck'

// import Dots from 'mdx-deck/dist/Dots'
// import { previous, next } from 'mdx-deck/dist/updaters'

const Bottom = styled.div([], {
  position: 'fixed',
  left: 0,
  right: 0,
  bottom: 0
})

createGlobalStyle`
    img {
        position: relative;
        max-height: 90vh;
        max-width: 100%;
        width: auto !important;
        left: 50% !important;
        top: 50vh !important;
        transform: translateY(-50%) translateX(-50%) !important;
    }
`

const Wrapper = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  position: relative;
`

const Bar = styled.div`
  background: #8A4BAF;
  height: 2px;
  width: ${props => 100 * props.size}%;
`

const Provider = props => {
  const { children } = props
  const { index, length } = useDeck()

  return (
    <Fragment>
      <Wrapper>{children}</Wrapper>
      <Footer />
      <Bottom>
        <Bar size={(index + 1) / length} />
      </Bottom>
    </Fragment>
  )
}

export default Provider