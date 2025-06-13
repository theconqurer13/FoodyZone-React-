import React from 'react'
import styled from 'styled-components'
import logo from './images/logo.png'
const App = () => {
  return (
    <MainContainer>
      <TopContainier>
        <div className='logo'><img src={logo} alt="logo image " /></div>

        <div className="searchInput">
          <input type="text" placeholder='search food....'/>
        </div>

      </TopContainier>

     

    </MainContainer>
  )
}

export default App;

const MainContainer = styled.div`
  background-color:#5A5959;
 
  


`
const TopContainier = styled.div`
  margin:30px;
  display:flex;
  justify-content:space-between;
  
  input{
    padding:5px;
    width:200px;
    border-radius:5px;
    border:none;
  }

`