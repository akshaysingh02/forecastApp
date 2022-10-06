import React from 'react';
import styled from 'styled-components';
import Conditions from './Conditions';
import dewpoint from '../icons/conditions_logo/dewpoint.png'
import humidity from '../icons/conditions_logo/humidity.png'
import moonphase from '../icons/conditions_logo/moonphase.png'
import pressure from '../icons/conditions_logo/pressure.png'
import temperature from '../icons/conditions_logo/temperature.png'
import uv from '../icons/conditions_logo/uv.png'
import visibility from '../icons/conditions_logo/visibility.png'
import wind from '../icons/conditions_logo/wind.png'
import weather from '../weather.json'
import { device } from './styledItems';

const Wrapper = styled.div`
    display: flex;
    justify-content:space-between;
    transition: all .3s ease-in-out ;
    @media ${device.tabS} { 
        flex-direction: column;
    }
`
const Left = styled.div`
    width: 49%;
    @media ${device.tabS} { 
        width: 90%;
        margin: auto;
    }
    @media ${device.mobileL} { 
        width: 98%;
    }
`
const Right = styled(Left)`

`
const HighTemp = weather.query.results.channel.item.forecast[0].high;
const LowTemp = weather.query.results.channel.item.forecast[0].low
const Humidity = weather.query.results.channel.atmosphere.humidity
const Pressure = weather.query.results.channel.atmosphere.pressure
const Visbility = weather.query.results.channel.atmosphere.visibility
const Wind = weather.query.results.channel.wind.speed

const ExtraDetails = () => {
    return (
        <Wrapper>
            <Left>
                <Conditions logo={temperature} title = {"High/Low"} value={`${HighTemp}°/${LowTemp}°`} />
                <Conditions logo={humidity} title = {"Humidity"} value={`${Humidity}%`} />
                <Conditions logo={pressure} title = {"Pressure"} value={`${Pressure} mb`} />
                <Conditions logo={visibility} title = {"Visibility"} value={Visbility} />
            </Left>
            <Right>
                <Conditions logo={wind} title = {"Wind"} value={`${Wind} km/h`} />
                <Conditions logo={dewpoint} title = {"Dew Point"} value={"--"} />
                <Conditions logo={uv} title = {"UV Index"} value={"--"} />
                <Conditions logo={moonphase} title = {"Moon Phase"} value={"--"} />
            </Right>
        </Wrapper>
    );
}

export default ExtraDetails;
