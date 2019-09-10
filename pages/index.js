import React, { Component } from 'react'
import Head from 'next/head'

import { Atoms } from '@react-lerna/ui-components'

class Home extends Component {
  render() {
    return (
      <div>
        <Head>
          <title>Home</title>
        </Head>

        <Atoms.Button label={"test"}/>
        <Atoms.Text.Paragraph text={"test"} />

        <div className='hero'>
          <h1 className='title'>Homepage</h1>
        </div>

      </div>
    )
  }
}

export default Home
