import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'

const Contacts = () => (
  <div>
    <Head>
      <title>Contacts</title>
    </Head>

    <Nav />

    <div className='hero'>
      <h1 className='title'>Welcome to Contacts!</h1>
    </div>

  </div>
)

export default Contacts
