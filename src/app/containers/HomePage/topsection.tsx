import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import BMWCarImg from "../../../assets/images/bmw.png";
import BlobImg from "../../../assets/images/blob.svg";
import { SCREENS } from "../../components/responsive";
import { Button } from "../../components/button";

const TopSectionContainer = styled.div`
    min-height: 529px;
    margin-top: 6em;
    ${tw`
        w-full
        max-w-screen-2xl
        flex
        justify-between
        pl-3
        pr-3
        lg:pl-12
        lg:pr-12
    `}
`;

const LeftSectionContainer = styled.div`
    ${tw`
        w-1/2
        flex
        flex-col
    `}
`;

const RightSectionContainer = styled.div`
    ${tw`
        w-1/2
        flex
        flex-col
        relative
        mt-20
    `};
`;

const OurSlogan = styled.h1`
    ${tw`
        font-bold
        text-2xl
        xl:text-6xl
        sm:text-3xl
        md:text-5xl
        lg:font-black
        md:font-extrabold
        text-black
        mb-4
        sm:leading-snug
        lg:leading-normal
        xl:leading-relaxed
    `};
`;

const Description = styled.p`
    ${tw`
        text-xs
        lg:text-xs
        xl:text-lg
        sm:max-h-full
        overflow-hidden
        max-h-12
        text-black
    `};
`;

const BlobContainer = styled.div`
    width: 20em;
    height: 10em;
    position: absolute;
    right: -9em;
    top: -8em;
    z-index: -1;
    transform: rotate(-15deg);
    img {
        width: 100%;
        height: auto;
        max-height: max-content;
    }

    @media (min-width: ${SCREENS.sm}){
        width: 40em;
        max-height: 10em;
        right: -15em;
        top: -16em;
        transform: rotate(-25deg)
    }
    @media (min-width: ${SCREENS.lg}){
        width: 50em;
        max-height: 30em;
        right: -15em;
        top: -16em;
        transform: rotate(-30deg)
    }
    @media (min-width: ${SCREENS.xl}){
        width: 70em;
        max-height: 30em;
        right: -20em;
        top: -25em;
        transform: rotate(-20deg)
    }
`;

const StandaloneCar = styled.div`
    width: auto;
    height: 10em;
    right: -9em;
    top: -5em;
    position: absolute;
    img{
        width: auto;
        height: 100%;
        max-width: fit-content;
    }
    @media (min-width: ${SCREENS.sm}){
        height: 16em;
        right: -15em;
        top: -7em;
    }
    @media (min-width: ${SCREENS.lg}){
        right: -6em;
        top: -5em;
    }
    @media (min-width: ${SCREENS.xl}){
        right: -5em;
        top: -3em;
    }
`;

const ButtonsContainer = styled.div`
    ${tw`
        flex
        mt-4
        flex-wrap
    `};
`;
export function TopSection() {

    return (
        <TopSectionContainer>
            <LeftSectionContainer>
                <OurSlogan>
                    Rent The Best Quality Cars' With Us 
                </OurSlogan>
                <Description>
                    Always choose the best car from our local stores or order it remotely
                    at the best price for you and get the best quality cars for as long as you need
                    And while ordering remotely, do not worry, we'll handle the car delivery
                    to you doorstep by ourselves.
                </Description>
                <ButtonsContainer>
                    <Button text="Book Your Ride" />
                    <Button theme="filled" text="Rent Your Car" />
                </ButtonsContainer>
            </LeftSectionContainer>
            <RightSectionContainer>
                <BlobContainer>
                    <img src={BlobImg} alt="" />
                </BlobContainer>
                <StandaloneCar>
                    <img src={BMWCarImg} alt="" />
                </StandaloneCar>
            </RightSectionContainer>
        </TopSectionContainer>
    );
}