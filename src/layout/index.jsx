import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <div className='flex flex-col min-h-svh'>
                <main className='mx-auto flex-1 max-w-7xl'>
                    <div className="">
                        {children}
                    </div>
                </main>
                <Footer />
            </div></>
    )
}

export default Layout
