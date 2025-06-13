import React from 'react'
import styled from 'styled-components'
const MiddleContainer = () => {
  return (
    <MiddleContaineer>
        <Button> All </Button>
        <Button> Breakfast </Button>
        <Button> Lunch </Button>
        <Button> Dinner </Button>  
    </MiddleContaineer>
  )
}

export default MiddleContainer;

const MiddleContaineer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding-bottom:10px;
  /* background-color:white; */

`
const Button = styled.button`
  padding: 2px 4px;
  background-color: red;
  color:white;
  border: none;
  border-radius: 4px;
  height: 25px;
  width: 80px;

  
`
