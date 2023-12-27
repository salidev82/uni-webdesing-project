import React from 'react'
import Service_1 from '../../../assets/img-service-1.png'
import Service_2 from '../../../assets/img-service-2.png'
import Service_3 from '../../../assets/img-service-3.png'

const Services = () => {

    const fakeData = [
        {
            id: 1,
            title: 'متخصصان با تجربه',
            description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است .",
            img: Service_1
        },
        {
            id: 2,
            title: 'نمونه کار های موفق',
            description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است .",
            img: Service_2
        },
        {
            id: 3,
            title: 'متخصصان با تجربه',
            description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است .",
            img: Service_3
        },
    ]

    return (
        <div className='mt-48'>
            <div className="w-full mb-12 bg-gray-200 p-4 rounded">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
                    {
                        fakeData.map((item) => (
                            <div key={item.id} className=''>
                                <div className="flex items-center gap-4 bg-white rounded-md shadow-lg">
                                    <img className='h-16' src={item.img} alt={item.title} />
                                    <h1 className='text-sm'>{item.title}</h1>
                                </div>
                                <div className='text-xs leading-7 text-justify mt-3 text-gray-500'>
                                    {item.description}
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Services
