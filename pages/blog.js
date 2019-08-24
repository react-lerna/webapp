import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'

const Blog = () => (
  <div>
    <Head>
      <title>Blog</title>
    </Head>

    <Nav />

    <div className='hero'>
      <h1 className='title'>Welcome to Blog</h1>
    </div>

  </div>
)

export default Blog
