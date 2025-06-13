import React from 'react'
import styled from 'styled-components'
import logo from './images/logo.png'
const TopContainer = () => {
  return (
    <TopContaineer>
         <div className='logo'><img src={logo} alt="logo image " /></div>
        
        <div className="searchInput">
        <input type="text" placeholder='search food....'/>
        </div>
    </TopContaineer>
  )
}

export default TopContainer;

const TopContaineer = styled.div`
  margin:50px;
  display:flex;
  justify-content:space-between;
  
  input{
    background-color: transparent;
    padding:5px;
    width:200px;
    border-radius:5px;
    border:2px red solid;
    color: white;
  }
  input::placeholder{
    color: white;
  }
  input:focus {
    outline: none;
    border: 2px solid white;
  }

`