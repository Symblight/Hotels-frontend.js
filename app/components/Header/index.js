import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const Wrapper = styled.header`
    width: 100%;
`
const MenuWrap = styled.div`
    display: flex;
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

const NavBrand = styled.div`
  flex-grow: 1;
`

const NavLink = styled(Link)`
  margin-left: 20px;
`

export const Header = () => (
  <Wrapper>
    <MenuWrap>
      <NavBrand>
        <Link to='/'>Hotels</Link>
      </NavBrand>
      <NavLink to='/login'>Sign in</NavLink>
      <NavLink to='/signup'>Sign up</NavLink>
    </MenuWrap>
  </Wrapper>
)
