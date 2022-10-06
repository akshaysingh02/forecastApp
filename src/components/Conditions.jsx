import React from 'react';
import styled from 'styled-components';
import { device } from './styledItems';

const Wrapper = styled.div`
    display: flex;
    padding: 1rem;
    border-top: 1px solid #00000028 ;
`



const Conditions = ({logo,title,value}) => {

    const Img = styled.div`
    height: 1.8rem;
    width: 1.8rem;
    background-image: url(${logo});
    background-size: cover;
    margin-right: 2rem;
    `
    const Title = styled.p`
        font-size: 1.2rem;
        font-weight: 600;
        @media ${device.mobileL} { 
        font-size: 1rem;
    }
    `
    const Val = styled(Title)`
        margin-left: auto;
    `

    return (
        <Wrapper>
            <Img></Img>
            <Title>{title}</Title>
            <Val>{value}</Val>
        </Wrapper>
    );
}

export default Conditions;
