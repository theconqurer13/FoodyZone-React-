import React, { forwardRef } from 'react'
import styled from 'styled-components'
import TopContainer from './TopContainer';
import MiddleContainer from './MiddleContainer';
const TopBar = forwardRef((props,ref) => {
    
  return (
    <TopBaar ref ={ref}>
        <TopContainer/>
        <MiddleContainer/>
    </TopBaar>
  )
})

export default TopBar;

const TopBaar = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
`