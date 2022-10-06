import React from 'react';
import styled from 'styled-components';
import { device } from './styledItems';


const DataBoxWrapper = styled.div`
    max-width: 18rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    @media ${device.tabS} { 
        max-width: 16rem;
    }
    @media ${device.mobileL} { 
        max-width: 12rem;
    }
`

const WeatherName = styled.p`
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 1.2rem;
    @media ${device.tabS} { 
        font-size: 1.8rem;
    }
`
const WeatherTemp = styled.p`
    font-size: 4rem;
    font-weight: 500;
    color: #5e5efe;
    margin-bottom: 1rem;
    @media ${device.tabS} { 
        font-size: 2.5rem;
  }
`
const Rain = styled.p`
    font-size: 1.5rem;
`



const DataBox = ({Name, Temp,Img,RainProb,isLast}) => {

    var virticalRule = "50%";
    if(isLast){
        virticalRule = "0%";
    }

    const WeatherImg = styled.div`
        height: 7rem;
        width: 7rem;
        background-image: url(${Img});
        background-size: cover;
        margin-bottom: 2rem;
        transition: all .3s ease ;
        :hover{
            transform: scale(1.1);
        }

        @media ${device.tabS} { 
            height: 5.5rem;
            width: 5.5rem;
         }
    `

    const Vr = styled.div`
        height: 10rem;
        width: 1.5px;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        position: absolute;
        background-image: radial-gradient(#3939398e,#3e3e3e13);
        opacity: ${virticalRule};
        @media ${device.tabS} { 
            opacity: 0;
         }
    `

    return (
        <DataBoxWrapper>
            <WeatherName>{Name}</WeatherName>
            <WeatherTemp>{Temp}</WeatherTemp>
            <WeatherImg></WeatherImg>
            {/* <Rain>{RainProb+"%"}</Rain> */}
            <Vr></Vr>
        </DataBoxWrapper>
    );
}

export default DataBox;
