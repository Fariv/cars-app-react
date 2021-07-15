import { faCalendarAlt, faCarSide, faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const Container = styled.div`
    ${tw`
        w-full
        flex
        flex-col
        items-center
        py-3
        lg:py-6
    `};
`;

const Title = styled.h2`
    ${tw`
        text-xl
        lg:text-4xl
        text-black
        font-extrabold
    `};
`;

const RowContainer = styled.div`
    ${tw`
        flex
        justify-evenly
        flex-wrap
        mt-7
        lg:mt-16
    `};
`;

const ColumnContainer = styled.div`
    ${tw`
        md:w-96
        flex
        flex-col
        items-center
        transition-colors
        hover:text-blue-500
        m-3
    `};
`;

const Step = styled.div`
    ${tw`
        flex
        rounded-lg
        items-center
        justify-center
        p-6
    `};
`;

const StepTitle = styled.h4`
    ${tw`
        text-black
        text-2xl
        font-semibold
        mt-4
    `};
`;

const StepDescription = styled.p`
    ${tw`
        text-xs
        md:text-sm
        text-center
        w-10/12
        text-gray-600
    `};
`;

const StepIcon = styled.span`
    ${tw`
        text-3xl
        text-blue-500
    `};
`;

export function BookingSteps() {
    return <Container>
        <Title>Our Working Steps</Title>
        <RowContainer>
            <ColumnContainer>
                <Step>
                    <StepIcon>
                        <FontAwesomeIcon icon={faMapMarkedAlt} />
                    </StepIcon>
                </Step>
                <StepTitle>Choose Location</StepTitle>
                <StepDescription>
                    Find the nearest rentacar point and start your dream journey with your dream car
                </StepDescription>
            </ColumnContainer>
            <ColumnContainer>
                <Step>
                    <StepIcon>
                        <FontAwesomeIcon icon={faCalendarAlt} />
                    </StepIcon>
                </Step>
                <StepTitle>Pick-Up Date</StepTitle>
                <StepDescription>
                    Pick-Up a date that suite your need
                </StepDescription>
            </ColumnContainer>
            <ColumnContainer>
                <Step>
                    <StepIcon>
                        <FontAwesomeIcon icon={faCarSide} />
                    </StepIcon>
                </Step>
                <StepTitle>Book your car</StepTitle>
                <StepDescription>
                    One click away to just book your dream car
                </StepDescription>
            </ColumnContainer>
        </RowContainer>
    </Container>
}