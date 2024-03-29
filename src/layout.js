import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  position: relative;
`

const Layout = ({ children }) => <Wrapper>{children}</Wrapper>

export default Layout
