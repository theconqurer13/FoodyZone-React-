import {React,useState,useRef,useEffect} from 'react'
import styled from 'styled-components'
import TopBar from './components/TopBar';
import BottomContainer from './components/BottomContainer';

const BASE_URL ="http://localhost:9000/";

const App = () => {
  const [data,setdata] = useState(null);
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState(null);

  useEffect(()=>{
    const fetchData = async () =>{
      setLoading(true);
      try {
        const response = await fetch(BASE_URL);
        const json = await response.json();
        setdata(json);
        setLoading(false);
      } catch (error) {
        setError("Unable to fetch data");
      }
    }
  })



   const topRef = useRef();
   const [topHeight, setTopHeight] = useState(0);

    useEffect(() => {
      if (topRef.current) {
        setTopHeight(topRef.current.offsetHeight);
      }
    }, []);

    if(error) return <div>{error}</div>
    if(loading) return <div>Loading...</div>

  return (
    <MainContainer>
      <TopBar ref = {topRef}/>
      <BottomContainer topHeight={topHeight} />
    </MainContainer>
  )
}

export default App;

const MainContainer = styled.div`
  background-color:#5A5959;
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding:0;


`
