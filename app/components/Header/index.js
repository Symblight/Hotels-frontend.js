import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const Wrapper = styled.header`
    width: 100%;
    background-color: #fff;
`
const MenuWrap = styled.div`
    margin: auto;
    width: 100%;
    max-width: 1124px;
    padding-left: 24px;
    padding-right: 24px;
    padding-top: 30px;
    padding-bottom: 30px;
    font-size: 24px;
    font-weight: 700;
`

export const Header = () => (
  <Wrapper>
    <MenuWrap>
      <Link to='/'>Hotels</Link>
    </MenuWrap>
  </Wrapper>
)
