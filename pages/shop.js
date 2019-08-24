import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'

const Shop = () => (
  <div>
    <Head>
      <title>Shop</title>
    </Head>

    <Nav />

    <div className='hero'>
      <h1 className='title'>Welcome to Shop!</h1>
    </div>

  </div>
)

export default Shop
