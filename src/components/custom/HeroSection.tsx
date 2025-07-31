"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import Container from '../layout/Container';
import Link from 'next/link';
import Image from 'next/image';
import { HERO_CONTENT } from "@/constants";
import parse from 'html-react-parser';

type Props = {}

const HeroSection = (props: Props) => {
    return (
        <>
            <Container>
                <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                    {
                        HERO_CONTENT?.map((item, index) => {
                            return (
                                <SwiperSlide>
                                    <div className='flex justify-content-between w-full'>
                                        <div>
                                            <h1 className='text-headline-1 capitalize'>{parse(item?.title)}</h1>
                                            <p className='text-body-2 text-nexcent-grey'>{item?.subtitle}</p>
                                            <Link href={''} className='btn-nexcent btn-nexcent-primary btn-nexcent-md'>{item?.buttonText}</Link>
                                        </div>
                                        <div>
                                            <Image
                                                src={item?.image}
                                                alt="Hero Image"
                                                width={500}
                                                height={500}
                                                className="w-full h-auto object-cover" />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </Container>
        </ >
    )
}

export default HeroSection