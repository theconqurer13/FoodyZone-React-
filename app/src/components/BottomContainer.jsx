import React from 'react'
import styled from 'styled-components'
import { BASE_URL } from '../App';
const BottomContainer = ({topHeight,data:foods}) => {
  return (
    <BottomContaineer topHeight={topHeight}>
        <FoodCards>
            {foods?.map((food)=> <FoodCard key={food.name}>
                
                    <div className="foodimage">
                    <img src={BASE_URL + food.image} alt="" />
                    </div>
                    <div className="foodinfo">
                         <div className="info">
                            <h3>{food.name}</h3>
                            <p>{food.text}</p>
                         </div>

                    <Button>${(food.price).toFixed(2)}</Button> 
                   </div>
                

                
                

            </FoodCard>)}
        </FoodCards>

    </BottomContaineer>
  )
}

export default BottomContainer;
const Button = styled.button`
        background-color: #ff3d3d;
        padding: 6px 14px;
        border: none;
        border-radius: 8px;
        color: white;
        font-weight: bold;
        font-size: 14px;
        cursor: pointer;
        align-self: flex-end;
        transition: background-color 0.2s ease;

        &:hover{
            background-color: #e63939;
        }
        margin-top: 20px;
        margin-left: 200px;
`
const FoodCards = styled.div`
    /* display:flex;
    justify-content:space-evenly;
    padding: 20px 80px;
    margin: 0 auto; */
     padding: 20px 80px;
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        justify-content: center;
        margin: 0;
        /* padding: 0; */
       
`
const FoodCard = styled.div`
    /* width: 400px;
    background-color:white; */
     width: 270px;
  background-color: rgba(0, 0, 0, 0.4); 
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(10px); 
  color: white;
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition: transform 0.3s ease;
        margin:0;
  &:hover{
     transform: scale(1.03);
  }

  .foodimage{
        width: 100px;
        height: 100px;
        border-radius: 50%; /* circular image */
        object-fit: cover;
        margin-bottom: 10px;
        margin-left:45px;
  }

  .info{
    h3{
        margin-top:20px;
        font-size: 18px;
        font-weight: bold;
    }
    p{
        font-size: 14px;
        color: #ddd;
        margin: 0;
    }
  }


`
const BottomContaineer = styled.div`
  width: 100vw;
 height: ${({ topHeight }) => `calc(100vh - ${topHeight}px)`};

  /* background-color: wheat; */
  
 
`

