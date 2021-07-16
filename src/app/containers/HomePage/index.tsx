import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { BookCard } from "../../components/bookCard";
import { Footer } from "../../components/footer";
import { Marginer } from "../../components/marginer";
import { NavBar } from "../../components/navbar";
import { AboutUs } from "./aboutUs";
import { BestCars } from "./bestCars";
import { BookingSteps } from "./bookingSteps";
import { TopSection } from "./topsection";

const PageContainer = styled.div`
    ${tw`
        flex
        flex-col
        w-full
        h-full
        items-center
        overflow-x-hidden
        overflow-y-hidden
    `}
`;

export function HomePage() {

    return <PageContainer>
        <NavBar />
        <TopSection />
        <BookCard />
        <Marginer direction="vertical" margin="4em" />
        <BookingSteps />
        <Marginer direction="vertical" margin="5em" />
        <AboutUs />
        <Marginer direction="vertical" margin="5em" />
        <BestCars />
        <Footer />
    </PageContainer>
}