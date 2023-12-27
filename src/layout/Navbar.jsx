import React from 'react'
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import Button from '../components/share/Button'

const Navbar = () => {
    return (
        <div className=' max-w-7xl mx-auto bg-white shadow-lg rounded-md py-7 px-2 my-7 flex items-center justify-between'>
            <div className='flex items-center'>
                <img src={Logo} className='h-12 mx-7' />
                <nav className=''>
                    <ul className='flex gap-4'>
                        <li>
                            <Link to={'/'}>خانه</Link>
                        </li>
                        <li>
                            <Link to={'/services'}>خدمات </Link>
                        </li>
                        <li>
                            <Link to={'/portfolio'}>پروژه ها</Link>
                        </li>
                        <li>
                            <Link to={'/about-us'}>درباره ما </Link>
                        </li>
                        <li>
                            <Link to={'/contact-us'}>تماس ما </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div>
                <Button>
                    مشاوره رایگان
                </Button>
            </div>

        </div>
    )
}

export default Navbar
