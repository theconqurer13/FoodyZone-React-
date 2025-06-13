import React from 'react'
import styled from 'styled-components'
const BottomContainer = ({topHeight}) => {
  return (
    <BottomContaineer topHeight={topHeight}>
        

    </BottomContaineer>
  )
}

export default BottomContainer;

const BottomContaineer = styled.div`
  width: 100vw;
 height: ${({ topHeight }) => `calc(100vh - ${topHeight}px)`};

  background-color: wheat;
 
`