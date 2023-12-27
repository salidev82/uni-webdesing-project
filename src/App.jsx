import React from 'react'
import Hero from './components/page/Home/Hero'
import Services from './components/page/Home/Services'
import Projects from './components/page/Home/Projects'
import Banner from './components/page/Home/Banner'
import Posts from './components/page/Home/Posts'

const App = () => {
  return (
    <section className='mx-auto'>
      <Hero />
      <Services />
      <Projects />
      <Banner />
      <Posts />
    </section>
  )
}

export default App
