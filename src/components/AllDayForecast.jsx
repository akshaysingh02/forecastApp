import React from 'react';
import { useState } from 'react';
import DataBox from './DataBox';
import styled from 'styled-components';
import { device } from './styledItems';
import sunImg from '../icons/sun.png'
import cloudysun from '../icons/cloudysun.png'
import overnight from '../icons/overnight.png'
import evening from '../icons/evening.png'
import AllDetails from './AllDetails';
import weather from '../weather.json'

const Wrapper = styled.div`
    background-color: white;
    border-radius: 1rem;
    color: #000000d6;
    padding: 1.5rem;
`

const Heading = styled.h2`
    font-size: 1.6rem;
    font-weight: 600;
    margin-bottom: 2rem;
    @media ${device.tablet} { 
    font-size: 1.4rem;
  }
  @media ${device.mobileL} { 
    font-size: 1.2rem;
  }
`
const BoxWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-bottom: 2rem;
    @media ${device.tabS} { 
        flex-wrap: wrap;
  }
`

const BtnBlue = styled.button`
    font-size: 1.2rem;
    background-color: #5e5efe;
    color: white;
    font-weight: 700;
    padding: 1rem 1.5rem;
    border-radius: 3rem;
    border: none;
    transition: all .2s ease;
    cursor: pointer;
    :hover{
        background-color: #5e5efe9a;
    }
`

const BtnWrapper = styled.div`
    display: flex;
    margin-bottom: 5rem;
    justify-content: center;
`

const BtnDetails = styled(BtnBlue)`
    display: flex;
    flex-direction: row;
    background-color: transparent;
    color: black;
    border: 1px solid ;
    border-color: grey;
    border-radius: 3rem;
    margin-left: 2rem;
    :hover{
        background-color: #5e5efe;
        color: white;
    }
    @media ${device.tabS} { 
        font-size: 1rem;
    }
    
`


const MoreDetailsWrapper = styled.div`

`

const AllDayForecast = () => {
    const [isShown, setIsShown] = useState(false);

    const [isRotate, RotateIt] = useState(false);

    const handleClick = event =>{
        setIsShown(current => !current);
        RotateIt(current => !current);
    }

    var degree = '180deg';
    if(isRotate){
        degree = '0'
    }

    const ArrowDown = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.3rem;
    margin-left: 1rem;
    transform: rotate(${degree});
`

    const MorningTemp = weather.query.results.channel.item.condition.temp;
    const Evening = weather.query.results.channel.item.condition.temp;

    const AfterNoon = weather.query.results.channel.item.forecast[0].high;

    const Night = weather.query.results.channel.item.forecast[0].low;

    return (
        <Wrapper>
            <Heading>Today's Forecast for New York City, NY, United States</Heading>
            <BoxWrapper>
                <DataBox Name={'Morning'} Temp ={MorningTemp+'°'} Img = {sunImg} RainProb = {"0"} isLast = {0}/>
                <DataBox Name={'Afternoon'} Temp ={AfterNoon+'°'} Img = {cloudysun} RainProb = {"0"} isLast = {0}/>
                <DataBox Name={'Evening'} Temp ={Evening+'°'} Img = {evening} RainProb = {"0"} isLast = {0}/>
                <DataBox Name={'Overnight'} Temp ={Night+'°'} Img = {overnight} RainProb = {"0"} isLast = {1}/>
            </BoxWrapper>
            <BtnWrapper>
                {/* <BtnBlue>Next Hours</BtnBlue> */}
                <BtnDetails onClick={handleClick} >More Details <ArrowDown>^</ArrowDown></BtnDetails>
            </BtnWrapper>
            <MoreDetailsWrapper>
                {isShown && <AllDetails />}
            </MoreDetailsWrapper>
        </Wrapper>
    );
}

export default AllDayForecast;
