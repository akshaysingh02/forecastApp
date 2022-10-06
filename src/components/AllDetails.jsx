import React from 'react';
import styled from 'styled-components';
import circle from '../icons/semicircle.svg'
import up from '../icons/up.png'
import down from '../icons/down.png'
import ExtraDetails from './ExtraDetails';
import weather from '../weather.json'
import { device } from './styledItems';



const Wrapper = styled.div`
    width: 100%;
    height: auto;
    padding: 1.5rem;
`

const Heading = styled.h1`
    font-size: 1.6rem;
    font-weight: 600;
    margin-bottom: 2.5rem;
    @media ${device.tabS} { 
        font-size: 1.4rem;
    }
    @media ${device.mobileL} { 
        font-size: 1.2rem;
    }
`

const TempWrapper = styled.div`
    padding: 0 2rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 3rem;
    flex-wrap: wrap;
    
`
const LeftSide = styled.div`
    margin-bottom: 1.2rem;
    @media ${device.mobileM} { 
        margin: auto;
        margin-bottom: 2rem;
    }
`
const RightSide = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media ${device.mobileM} { 
        margin: auto;
        margin-bottom: 1.6rem;
    }
`
const Sun = styled.div`
    height: 4rem;
    width: 8rem;
    background-size: cover;
    background-image: url(${circle});
    margin-bottom: 1.5rem;
    @media ${device.tabS} { 
        height: 3rem;
        width: 6rem;
    }
`

const Temp = styled.h3`
    font-size: 5rem;
    @media ${device.tabS} { 
        font-size: 4rem;
    }
`

const Feel = styled.h4`
    font-size: 1.2rem;
    font-weight: 600;
    opacity: 70%;
    @media ${device.tabS} { 
        font-size: 1rem;
    }
`

const TimeWrapper = styled.div`
    display: flex;
`
const Up = styled.div`
    height: 2rem;
    width: 1.7rem;
    background-size: cover;
    background-image: url(${up});
    margin: 0 .5rem;

`

const Down = styled.div`
    height: 2rem;
    width: 1.7rem;
    background-size: cover;
    background-image: url(${down});
    margin: 0 .5rem;
`

const SunTime = styled.p`
    font-size: 1.4rem;
    @media ${device.tabS} { 
        font-size: 1.2rem;
    }
`
const TempNow = weather.query.results.channel.item.condition.temp;

const SunUp = weather.query.results.channel.astronomy.sunrise;

const SunDown = weather.query.results.channel.astronomy.sunset;

const AllDetails = () => {
    return (
        <Wrapper>
            <Heading>Weather Today in New York City, NY, United States</Heading>
            <TempWrapper>
                <LeftSide>
                    <Temp>{TempNow}°</Temp>
                    <Feel>Feels Like</Feel>
                </LeftSide>
                <RightSide>
                    <Sun></Sun>
                    <TimeWrapper>
                        <Up></Up>
                        <SunTime>{SunUp}</SunTime>
                        <Down></Down>
                        <SunTime>{SunDown}</SunTime>
                    </TimeWrapper>
                </RightSide>
            </TempWrapper>
            <ExtraDetails />
        </Wrapper>
    );
}

export default AllDetails;
