import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { SCREENS } from "../../components/responsive";
import JeepX5 from "../../../assets/images/jeepx5_2020.png";

const AboutUsContainer = styled.div`
    ${tw`
        w-full
        flex
        flex-wrap
        items-center
        2xl:justify-center
        py-4
        px-7
        md:px-0
        bg-white
    `};
`;

const CarContainer = styled.div`
    width: auto;
    height: 15em;
    margin: 0 auto;
    img {
        width: auto;
        height: 100%;
    }
    @media (min-width: ${SCREENS.md}) {
        height: 28em;   
    }
    @media (min-width: ${SCREENS.lg}) {
        height: 20em;   
    }
    @media (min-width: ${SCREENS["2xl"]}) {
        height: 35em;   
        margin: 0 auto;
    }
`;

const InfoContainer = styled.div`
    ${tw`
        lg:w-1/2
        md:w-2/3
        sm:w-4/5
        flex
        flex-col
        my-0
        mx-auto
        text-left
    `};
`;

const Title = styled.h1`
    ${tw`
        text-black
        text-2xl
        md:text-5xl
        font-extrabold
        md:font-black
        md:leading-normal
    `};
`;

const InfoText = styled.p`
    ${tw`
        max-w-2xl
        text-sm
        text-gray-500
        md:text-base
        text-gray-500
        mt-4
    `};
`;
export function AboutUs(){
    return <AboutUsContainer>
        <CarContainer>
            <img src={JeepX5} alt="about us" />
        </CarContainer>
        <InfoContainer>
            <Title>Fall Upon To Our Rental Deals For The Best Experience</Title>
            <InfoText>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
            </InfoText>
        </InfoContainer>
    </AboutUsContainer>
}