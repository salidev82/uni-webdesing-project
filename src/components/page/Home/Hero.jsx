import React from 'react'
import HeroImage from '../../../assets/hero.png'
import Button from '../../share/Button'

const Hero = () => {
    return (
        <div className="mt-28">
            <div className='grid lg:grid-cols-2 lg:ltr grid-cols-1  '>
                <div className='flex flex-col gap-y-12'>
                    <h1 className='text-6xl font-bold leading-snug xs text-center lg:text-right'>در خانه ای با طراحی مدرن و فضـایی دلنشین زندگی کنید !</h1>
                    <p className='text-justify leading-7 mx-2'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</p>
                    <div className="flex">
                        <Button>
                            مشاوره رایگان
                        </Button>
                        <Button >
                            راهنمایی بیشتر
                        </Button>
                    </div>
                </div>
                <div className='my-2 hidden lg:block'>
                    <img src={HeroImage} className='max-w-md mr-auto' />
                </div>
            </div>
        </div>
    )
}

export default Hero
