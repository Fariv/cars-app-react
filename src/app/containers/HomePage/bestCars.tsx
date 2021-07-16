import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ICar } from "../../../typings/car";
import { Car } from "../../components/car/index";
import Carousel, { Dots, slidesToShowPlugin } from "@brainhubeu/react-carousel";
import '@brainhubeu/react-carousel/lib/style.css';
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../../components/responsive";

const BestRelevantCarsContainer = styled.div`
    ${tw`
        max-w-screen-lg
        flex
        w-full
        flex-col
        items-center
        justify-center
        px-4
        md:px-0
        mb-10
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

const CarsContainer = styled.div`
    ${tw`
        w-full
        flex
        flex-wrap
        justify-center
        mt-7
        md:mt-10
    `};
`;

export function BestCars() {

    const [current, setCurrent] = useState(0);
    const isMobile = useMediaQuery({ maxWidth: SCREENS.sm })

    const testCar1: ICar = {
        name: "Tesla Model S",
        mileage: "2k",
        thumbnailSrc: "https://tesla-cdn.thron.com/delivery/public/image/tesla/b6761e24-0f64-483a-b868-50c5bab803bd/bvlatuR/std/2880x1800/MS-Range-Hero-Desktop",
        dailyPrice: 175,
        monthlyPrice: 5150,
        gearType: "Auto",
        gas: "Electric, Solar",
    }

    const testCar2: ICar = {
        name: "Ferrari GTC4Lusso",
        mileage: "10k",
        thumbnailSrc: "http://shiftinglanes.com/wp-content/uploads/2016/02/ferrari_gtc4lusso_1.jpg",
        dailyPrice: 80,
        monthlyPrice: 2300,
        gearType: "Auto",
        gas: "Petrol, Octane, CNG",
    }

    const testCar3: ICar = {
        name: "Bugatti Chiron",
        mileage: "10k",
        thumbnailSrc: "http://shiftinglanes.com/wp-content/uploads/2016/02/bugatti-concept.jpg",
        dailyPrice: 90,
        monthlyPrice: 2600,
        gearType: "Auto",
        gas: "Petrol, Octane, CNG",
    }

    const cars = [ 
        (<Car {...testCar1} />), 
        (<Car {...testCar2} />), 
        (<Car {...testCar3} />), 
        (<Car {...testCar1} />), 
        (<Car {...testCar1} />), 
        (<Car {...testCar3} />) 
    ];

    return <BestRelevantCarsContainer>
        <Title>Explore Our Best Deals</Title>
        <CarsContainer>
            <Carousel value={current} onChange={setCurrent} slides={cars} plugins={[
                "clickToChange",
                {
                    resolve: slidesToShowPlugin,
                    options: {
                        numberOfSlides: 3,
                    }
                }
            ]} breakpoints={{
                640: {
                    plugins: [
                        {
                            resolve: slidesToShowPlugin,
                            options: {
                                numberOfSlides: 1
                            }
                        }
                    ]
                },
                900: {
                    plugins: [
                        {
                            resolve: slidesToShowPlugin,
                            options: {
                                numberOfSlides: 2
                            }
                        }
                    ]
                },
            }} />
            <Dots value={current} onChange={setCurrent} number={ isMobile ? cars.length : Math.ceil(cars.length / 3)} />
        </CarsContainer>
    </BestRelevantCarsContainer>
}