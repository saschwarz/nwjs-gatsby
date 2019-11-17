import React from 'react'
import styled from 'styled-components'

const Footer = styled.footer`
  font-size: 22px;
  color: #8A4BAF;
  padding: 30px 100px;
  text-align: right;
  width: calc(100vw - 200px);
  border-top: 2px solid #8A4BAF;
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  font-family: Futura, sans-serif;
`

export default () => (
  <Footer>
    <a style={{color:'#8A4BAF'}} href="https://www.meetup.com/Northwest-Chicago-JavaScript/">NWCJS</a>
    <span>Moving the AgilityNerd Blog to GatsbyJS</span>
    <a style={{color:'#8A4BAF'}} href="https://twitter.com/steveaschwarz">@steveaschwarz</a>
  </Footer>
)
