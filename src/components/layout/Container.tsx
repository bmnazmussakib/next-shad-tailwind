import React, { ReactNode } from 'react'

type Props = {
    children: ReactNode;
}

const Container = ({ children }: Props) => {
    return (
        <>
            <div className='w-full px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto'>
                {children}
            </div>
        </>
    )
}

export default Container