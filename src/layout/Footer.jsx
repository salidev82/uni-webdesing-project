import React from 'react'
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom'


const map = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2161.9582778315425!2d51.368024989395806!3d35.7193971063792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e070fca2a28ad%3A0x76eab519b7baf52!2sEtebar%20Service%20Package!5e0!3m2!1sen!2suk!4v1703661545203!5m2!1sen!2suk" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'

const Footer = () => {
    return (
        <footer className='w-full mt-20  bg-gray-200 '>
            <div className="max-w-7xl mx-auto grid lg:grid-cols-4 lg:text-right text-center grid-cols-1 gap-8 my-8">
                <div className="flex flex-col">
                    <img src={Logo} className='h-12 w-32 mx-1' />
                    <p className='text-justify mr-1 mt-4 leading-6'>گروه معماری و طراحی صاد را میتوانید در شبکه های اجتماعی دنبال کنید و مطالب جدید دنیای طراحی و معماری را مشاهده کنید.</p>
                </div>
                <div className="flex flex-col mx-4">
                    <div className='pb-2 relative'>
                        <h2 className='font-bold mb-8'>لینک های با اهمیت</h2>
                        <ul className='flex flex-col gap-2'>
                            <li>
                                <a href="#">
                                    <Link to={'/'}>
                                        خانه
                                    </Link>
                                </a>
                            </li>

                            <li>
                                <a href="#">
                                    <Link to={'/services'}>
                                        خدمات
                                    </Link>
                                </a>
                            </li>


                            <li>
                                <a href="#">
                                    <Link to={'/portfolio'}>
                                        پروژه ها
                                    </Link>
                                </a>
                            </li>


                            <li>
                                <a href="#">
                                    <Link to={'/about-us'}>
                                        درباره ما
                                    </Link>
                                </a>
                            </li>

                            <li>
                                <a href="#">
                                    <Link to={'/contact-us'}>
                                        تماس ما
                                    </Link>
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>
                <div className="flex flex-col mx-4">
                    <div className='pb-2 relative flex flex-col gap-2'>
                        <h2 className='font-bold mb-4'>
                            تماس با ما
                        </h2>
                        <address>
                            ایران ، تهران ، خیابان گاندی ، مجتمع صاد ، طبقه 2 پلاک 8
                        </address>
                        <a href="mailto:qsalar905@gmail.com">
                            qsalar905@gmail.com
                        </a>
                        <p dir='rtl ml-auto'>
                            021-1274128
                        </p>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div dangerouslySetInnerHTML={{__html : map}} className="w-92 h-92">
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
