import React from 'react'
import Head from 'next/head'

import { Atoms } from '@react-lerna/ui-components'

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
    </Head>

    <Atoms.Button />

    <div className='hero'>
      <h1 className='title'>Homepage</h1>
    </div>

  </div>
)

export default Home
