import React from 'react';
import Banner from './Banner';
import AllDayForecast from './AllDayForecast';
import styled from 'styled-components';



const Wrapper = styled.div`
    max-width: 80rem;
    margin: auto;
    color: white;
`

const Hero = () => {
    return (
        <Wrapper>
            <Banner />
            <AllDayForecast />
        </Wrapper>
    );
}

export default Hero;