import React from 'react'
import ProjectCard from '../../share/ProjectCard'
import Projects_1 from '../../../assets/projects_1.png'


const Projects = () => {

    const fakeData = [
        {
            id: 1,
            title: 'طراحی نمای برج مدرن',
            description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است متون بلکه روزنامه و مجله در ستون و سطر",
            img: Projects_1,
        },
        {
            id: 2,
            title: 'طراحی نمای برج مدرن',
            description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است متون بلکه روزنامه و مجله در ستون و سطر",
            img: Projects_1,
        },
        {
            id: 3,
            title: 'طراحی نمای برج مدرن',
            description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است متون بلکه روزنامه و مجله در ستون و سطر",
            img: Projects_1,
        },
    ]

    return (
        <div className='text-center my-32'>
            <p className='text-main'>نمونه کار ها</p>
            <h2 className='text-black text-2xl'>پروژه های انجام شده توسط تیم ما</h2>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-8 my-8'>
                {
                    fakeData.map((item) => {
                        return <ProjectCard key={item.id} img={item.img} title={item.title} description={item.description} />
                    })
                }
            </div>
        </div>
    )
}

export default Projects
