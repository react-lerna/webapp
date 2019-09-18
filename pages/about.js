import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'

const About = () => (
  <div>
    <Head>
      <title>About</title>
    </Head>

    <Nav />

    <div className='hero'>
      <h1 className='title'>Welcome to About</h1>
    </div>

  </div>
)

export default About
