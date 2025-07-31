import React from 'react'
import HeroSection from './HeroSection'
import Navbar from '../common/Navbar'

type Props = {}

const Header = (props: Props) => {
    return (
        <>
            <div className='bg-nexcent-silver'>
                <Navbar />
                <HeroSection />
            </div>
        </>
    )
}

export default Header