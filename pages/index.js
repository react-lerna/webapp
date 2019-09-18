import React, { Component } from 'react'
import Head from 'next/head'

import { Atoms, utils } from '@react-lerna/ui-components'
import Nav from '../components/nav'

const { Button, Link, Paragraph } = Atoms

const homepageContent = {
  componentType: 'Layout',
  componentChildren: [{
    componentType: 'Grid',
    props: {
      columns: 2
    },
    componentChildren: [
      {
        componentType: 'Grid',
        props: {
          columns: 1
        },
        componentChildren: [
          {
            componentType: 'Button',
            props: {
              label: 'inner button 1',
              secondary: true,
            },
          },
          {
            componentType: 'Button',
            props: {
              label: 'inner button 2',
            },
          },
        ],
      },
      {
        componentType: 'ProductList',
        props: {
          products: [
            {
              title: 'Westpack Backpack 1',
              price: '79',
              currency: '€',
              images: {
                cover: 'http://via.placeholder.com/200x300',
                gallery: ['http://via.placeholder.com/800x600', 'https://placebear.com/800/600', 'https://picsum.photos/800/600'],
              },
            },
            {
              title: 'Westpack Backpack 2',
              price: '79',
              currency: '€',
              images: {
                cover: 'http://via.placeholder.com/200x300',
                gallery: ['http://via.placeholder.com/800x600', 'https://placebear.com/800/600', 'https://picsum.photos/800/600'],
              },
            },
            {
              title: 'Westpack Backpack 3',
              price: '79',
              currency: '€',
              images: {
                cover: 'http://via.placeholder.com/200x300',
                gallery: ['http://via.placeholder.com/800x600', 'https://placebear.com/800/600', 'https://picsum.photos/800/600'],
              },
            },
          ],
        }
      },
    ],
  }],
}

class Home extends Component {
  render() {
    return (
      <div>
        <Head>
          <title>Home</title>
        </Head>

        <Nav />

        <Button label={"test"}/>
        <Link label={"test"}/>
        <Paragraph text={"test"} />

        <utils.ComponentRenderer {...homepageContent} />

        <div>
          <h1>Homepage</h1>
        </div>

      </div>
    )
  }
}

export default Home
