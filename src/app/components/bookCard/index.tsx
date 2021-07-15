import React, { useEffect, useRef, useState } from "react";
import { faCalendarAlt, faCaretDown, faCaretSquareDown, faCaretSquareUp, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import tw from "twin.macro";
import { Button } from "../button";
import { Marginer } from "../marginer";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { SCREENS } from "../responsive";


interface CardContainerRefProp {
    ref?: any
}

const CardContainer = styled.div<CardContainerRefProp>`
    min-height: 4.3rem;
    box-shadow: 0 2px 12px -3px rgba(0, 0, 0, 0.5);
    ${tw`
        flex
        justify-center
        items-center
        rounded-md
        bg-white
        pt-1 
        pb-1 
        pr-3 
        pl-3 
        md:pt-2 
        md:pb-2
        md:pl-6
        md:pr-6
        my-4
    `};
`;

const ItemContainer = styled.div`
    position: relative;
    ${tw`flex`};
`;

const Icon = styled.span`
    ${tw`
        text-blue-500
        fill-current
        text-xs
        md:text-base
        mr-1 
        md:mr-3
    `};
`;

const SmallIcon = styled.span`
    ${tw`
        text-gray-500
        fill-current
        text-sm
        ml-2
    `};
`;

const Name = styled.span`
    ${tw`
        text-gray-600
        text-xs
        md:text-sm
        cursor-pointer
    `};
`;

const LineSeparator = styled.span`
    width: 2px;
    height: 45%;
    ${tw`
        bg-gray-300 
        mr-2
        ml-2 
        md:mr-5
        md:ml-5
    `};
`;

interface DateCalendarDimensionProps{
    wd: any
    elementRef: any
    id?: string
}

const DateCalendar = styled(Calendar)<DateCalendarDimensionProps>`
    ${props => (props.wd.height - props.elementRef.current.getBoundingClientRect().bottom) > 299 ? "top: 1.75em;": "top: -20.25em;"}
    position: absolute;
    left: 0;
    max-width: none;
    @media (max-width: ${SCREENS.md}){
        ${props => (props.id === "return") ? "left: -4.75em;": "left: 0;"}
    }
    @media (max-width: ${SCREENS.sm}){
        ${props => (props.id === "return") ? "left: -6.25em;": "left: 0;"}
    }
`;

export function BookCard(){

    const defaultValue = <>&nbsp;</>
    const CardContainerRef = useRef(); 
    const windowDimensions = useWindowDimensions();
    const [startDate, setStartDate] = useState<Date>(new Date());
    const [isStartCalendarOpen, setIsStartCalendarOpen] = useState(false);
    const [returnDate, setReturnDate] = useState<Date>(new Date());
    const [isReturnCalendarOpen, setIsReturnCalendarOpen] = useState(false);
    const [startDateCalenderDom, setStartDateCalenderDom] = useState(defaultValue);
    const [returnDateCalenderDom, setReturnDateCalenderDom] = useState(defaultValue);

    console.log("startDate", startDate);
    console.log("returnDate", returnDate);
    const toggleStartDateCalendar = () => {
        setIsStartCalendarOpen(!isStartCalendarOpen);
        if(isReturnCalendarOpen){
            setIsReturnCalendarOpen(!isReturnCalendarOpen)
        }
    }
    const toggleReturnDateCalendar = () => {
        setIsReturnCalendarOpen(!isReturnCalendarOpen);
        if(isStartCalendarOpen){
            setIsStartCalendarOpen(!isStartCalendarOpen);
        }
    }
    useEffect(() => {
        let dateCalenderObj = <DateCalendar value={startDate} id="start" onChange={setStartDate} wd={windowDimensions} elementRef={CardContainerRef} />;
        setStartDateCalenderDom(dateCalenderObj);
        dateCalenderObj = <DateCalendar value={returnDate} id="return" onChange={setReturnDate} wd={windowDimensions} elementRef={CardContainerRef} />;
        setReturnDateCalenderDom(dateCalenderObj);
        console.log(CardContainerRef);
    }, []);
    return <CardContainer ref={CardContainerRef}>
        <ItemContainer>
            <Icon>
                <FontAwesomeIcon icon={faCalendarAlt} />
            </Icon>
            <Name onClick={toggleStartDateCalendar}>
                Pick up Date
                <SmallIcon>
                    <FontAwesomeIcon icon={isStartCalendarOpen ? faCaretUp : faCaretDown} />
                </SmallIcon>
            </Name>
            {isStartCalendarOpen && startDateCalenderDom}
        </ItemContainer>
        <LineSeparator />
        <ItemContainer>
            <Icon>
                <FontAwesomeIcon icon={faCalendarAlt} />
            </Icon>
            <Name onClick={toggleReturnDateCalendar}>
                Return Date
                <SmallIcon>
                    <FontAwesomeIcon icon={isReturnCalendarOpen ? faCaretUp : faCaretDown} />
                </SmallIcon>
            </Name>
            {isReturnCalendarOpen && returnDateCalenderDom}
        </ItemContainer>
        <Marginer direction="horizontal" margin="2em" />
        <Button text="Book Your Ride" />
    </CardContainer>
}