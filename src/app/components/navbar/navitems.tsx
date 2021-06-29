import React from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import { slide as Menu } from "react-burger-menu";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../responsive";
import menuStyles from "./menuStyles";

const ListConatiner = styled.ul`
    ${tw`
        flex
        list-none
    `}
`;

const Navitem = styled.li<{ menu?: any }>`
    ${tw`
        text-xs
        text-black
        font-medium
        md:text-base
        mr-1
        md:mr-5
        cursor-pointer
        transition
        duration-300
        ease-in-out
        hover:text-blue-600
        text-left
    `}

    ${({ menu }) => menu && css`
        ${tw`
            text-white
            text-base
            mb-3
            focus:text-blue-400
        `};
    `}
`;
export function NavItems() {

    const isMobile = useMediaQuery({maxWidth: SCREENS.sm});
    if(isMobile){
        return (
            <Menu right styles={menuStyles}>
                <ListConatiner>
                    <Navitem menu>
                        <a href="#">Home</a>
                    </Navitem>
                    <Navitem menu>
                        <a href="#">Cars</a>
                    </Navitem>
                    <Navitem menu>
                        <a href="#">Serivces</a>
                    </Navitem>
                    <Navitem menu>
                        <a href="#">Contact us</a>
                    </Navitem>
                </ListConatiner>
            </Menu>
        )
    }
    return <ListConatiner>
        <Navitem>
            <a href="#">Home</a>
        </Navitem>
        <Navitem>
            <a href="#">Cars</a>
        </Navitem>
        <Navitem>
            <a href="#">Serivces</a>
        </Navitem>
        <Navitem>
            <a href="#">Contact us</a>
        </Navitem>
    </ListConatiner>
}