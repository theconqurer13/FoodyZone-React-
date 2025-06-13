import {React,useState,useRef,useEffect} from 'react'
import styled from 'styled-components'

const App = () => {
   const topRef = useRef();
  const [topHeight, setTopHeight] = useState(0);

  useEffect(() => {
    if (topRef.current) {
      setTopHeight(topRef.current.offsetHeight);
    }
  }, []);
  return (
    <MainContainer>
      <TopBar ref = {topRef}/>

      <TopBar ref={topRef}>
          <TopContainier>
            <div className='logo'><img src={logo} alt="logo image " /></div>

            <div className="searchInput">
              <input type="text" placeholder='search food....'/>
            </div>

          </TopContainier>

      <MiddleContainer>
        <Button> All </Button>
        <Button> Breakfast </Button>
        <Button> Lunch </Button>
        <Button> Dinner </Button>                               
      </MiddleContainer>
      </TopBar>

      <BottomContainer topHeight={topHeight}>


      </BottomContainer>


     

    </MainContainer>
  )
}

export default App;
const BottomContainer = styled.div`
  width: 100vw;
 height: ${({ topHeight }) => `calc(100vh - ${topHeight}px)`};

  background-color: wheat;
  /* margin-top:20px; */

`


const MainContainer = styled.div`
  background-color:#5A5959;
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding:0;


`
const TopBar = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const TopContainier = styled.div`
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