import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { BookCard } from "../../components/bookCard";
import { NavBar } from "../../components/navbar";
import { TopSection } from "./topsection";

const PageContainer = styled.div`
    ${tw`
        flex
        flex-col
        w-full
        h-full
        items-center
        overflow-x-hidden
    `}
`;

export function HomePage() {

    return <PageContainer>
        <NavBar />
        <TopSection />
        <BookCard />
    </PageContainer>
}