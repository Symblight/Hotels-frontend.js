import React from 'react'
import styled from 'styled-components'


const Wrapper = styled.img`
    height: 200px;
    width: 200px;
`

export const Image = ({ src, className, ...props }) => (<Wrapper className={className} src={src} {...props} />)
