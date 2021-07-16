import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Logo } from "../logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";


const FooterContainer = styled.div`
    background-color: rgb(15 27 62);
    ${tw`
        flex
        flex-col
        min-w-full
        pt-10
        md:pt-16
        items-center
        justify-center
    `};
`;

const InnerContainer = styled.div`
    ${tw`
        flex
        flex-wrap
        max-w-screen-2xl
        w-full
        h-full
    `};
`;

const BottomContainer = styled.div`
  ${tw`
    w-full
    flex
    max-w-screen-2xl
    justify-center
    md:justify-start
    mt-7
    md:mt-1
  `};
`;

const CopyrightText = styled.small`
  font-size: 12px;
  ${tw`
    text-gray-300
    px-10
    py-3
    md:px-3
  `}
`;

const AboutContainer = styled.div`
  ${tw`
    flex
    flex-col
    mr-2
    md:mr-16
    px-10
    md:px-3
  `};
`;

const AboutText = styled.p`
  ${tw`
    text-white
    text-sm
    font-normal
    max-w-xs
    leading-5
    mt-2
    text-left
  `};
`;

const SectionContainer = styled.div`
  ${tw`
    w-full
    md:w-auto
    flex
    flex-col
    mr-2
    md:mr-16
    pl-10
    pr-10
    md:pl-3
    md:pr-3
    mt-7
    md:mt-0
    text-left
  `};
`;

const LinksList = styled.ul`
  ${tw`
    outline-none
    list-none
    flex
    flex-col
  `};
`;

const ListItem = styled.li`
  ${tw`
    mb-3
  `};
  & > a {
    ${tw`
      text-sm
    text-white
      transition-all
      hover:text-gray-200
    `};
  }
`;

const HeaderTitle = styled.h3`
  ${tw`
    text-2xl
    font-bold
    text-white
    mb-3
  `};
`;

const HorizontalContainer = styled.div`
  ${tw`
    flex
    items-center
  `};
`;

const BlueIcon = styled.span`
  ${tw`
    w-9
    h-9
    rounded-full
    bg-blue-500
    flex
    items-center
    justify-center
    text-white
    text-base
    mr-2
  `};
`;

const SmallText = styled.h6`
  ${tw`
    text-sm
    text-white
  `};
`;

export function Footer() {

    return <FooterContainer>
        <InnerContainer>
            <AboutContainer>
                <Logo color="white" />
                <AboutText>
                    Rentacar is a Car renting and selling company located in many
                    countries across the world which has high quality cars and top rated
                    service.
                </AboutText>
            </AboutContainer>
            <SectionContainer>
                <HeaderTitle>Our Links</HeaderTitle>
                <LinksList>
                    <ListItem>
                    <a href="#">Home</a>
                    </ListItem>
                    <ListItem>
                    <a href="#">About Us</a>
                    </ListItem>
                    <ListItem>
                    <a href="#">Services</a>
                    </ListItem>
                    <ListItem>
                    <a href="#">Models</a>
                    </ListItem>
                    <ListItem>
                    <a href="#">Blog</a>
                    </ListItem>
                </LinksList>
            </SectionContainer>
            <SectionContainer>
                <HeaderTitle>Other Links</HeaderTitle>
                <LinksList>
                    <ListItem>
                    <a href="#">FAQ</a>
                    </ListItem>
                    <ListItem>
                    <a href="#">Contact Us</a>
                    </ListItem>
                    <ListItem>
                    <a href="#">Support</a>
                    </ListItem>
                    <ListItem>
                    <a href="#">Privacy Policy</a>
                    </ListItem>
                    <ListItem>
                    <a href="#">Terms &amp; Conditions</a>
                    </ListItem>
                </LinksList>
            </SectionContainer>
            <SectionContainer>
                <HeaderTitle>Call Now</HeaderTitle>
                <HorizontalContainer>
                    <BlueIcon>
                    <FontAwesomeIcon icon={faPhoneAlt} />
                    </BlueIcon>
                    <SmallText>+91 555-234-8469</SmallText>
                </HorizontalContainer>
            </SectionContainer>
            <SectionContainer>
                <HeaderTitle>Mail</HeaderTitle>
                <HorizontalContainer>
                    <BlueIcon>
                    <FontAwesomeIcon icon={faEnvelope} />
                    </BlueIcon>
                    <SmallText>info@yourcar.com</SmallText>
                </HorizontalContainer>
            </SectionContainer>
        </InnerContainer>
        <BottomContainer>
            <CopyrightText>
                Copyright &copy; {new Date().getFullYear()} Rentacar. All rights
                reserved.
            </CopyrightText>
        </BottomContainer>
    </FooterContainer>
}