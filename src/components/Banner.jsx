import React from 'react';
import styled from 'styled-components';
import backgroundImg from '../images/new.jpg'
// import mainSun from '../icons/mainSun.png'
import weather from '../weather.json'
import { device } from './styledItems';

const BannerWrapper = styled.div`
   border-radius : 2rem;
   background-image: url(${backgroundImg});

   background-size: cover;
   border-radius: 1rem;
   overflow: hidden;
   margin-bottom: 1.5rem;
`
const BannerHead = styled.div`
    padding: 1.5rem;
    font-size: 2rem;
    font-weight: 600;
    background-color: #00000070;
    line-height: 150%;

    @media ${device.mobileL} { 
    font-size: 1.4rem;
  }

`
const BannerData = styled.div`
    padding: 1.5rem;
    display: flex;
    justify-content: space-between;
    
`
// const ImgDiv = styled.div`
//     background-image: url(${mainSun});
//     background-size: cover;
//     height: 12rem;
//     width: 12rem;
//     align-self: center;
// `

const TempH1 = styled.h1`
    font-size: 8.2rem;
    @media ${device.mobileL} { 
    font-size: 4rem;
  }
    
`

const IdicatorText = styled.h3`
    font-size: 2.5rem;
    @media ${device.mobileL} { 
    font-size: 1.5rem;
  }
`

const DayTemp = styled.p`
    font-size: 3rem;
    font-weight: 500;
    @media ${device.mobileL} { 
    font-size: 2rem;
  }
`

const ImgWrapper = styled.div`
    display: flex;
`
const SpanText = styled.span`
    font-size: 1.8rem;
    font-weight: 400;
`

const city = weather.query.results.channel.location.city;
const region = weather.query.results.channel.location.region;
const country = weather.query.results.channel.location.country;
const BuildDate = weather.query.results.channel.item.pubDate;

const currentTemp = weather.query.results.channel.item.condition.temp;
const tempText = weather.query.results.channel.item.condition.text;

const LowestTemp = weather.query.results.channel.item.forecast[0].low;
const AfterNoonTemp = weather.query.results.channel.item.forecast[0].high;




const Banner = () => {
    return (
        <BannerWrapper>
            <BannerHead>
            {city},{region},{country}<br/><SpanText>As of</SpanText> {BuildDate}
            </BannerHead>

            <BannerData>
                <div>
                    <TempH1>{currentTemp}°</TempH1>
                    <IdicatorText>{tempText}</IdicatorText>
                    <DayTemp>Day {AfterNoonTemp}° • Night {LowestTemp}°</DayTemp>
                </div>
                <ImgWrapper>
                    {/* <ImgDiv></ImgDiv> */}
                </ImgWrapper>
            </BannerData>
        </BannerWrapper>
    );
}

export default Banner;