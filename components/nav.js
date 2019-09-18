import React from 'react'
import Link from 'next/link'

const Nav = () => (
  <nav>
    <ul>
      <li>
          <Link href='/'>
              <a>Home</a>
          </Link>
          <Link href='/about'>
              <a>about</a>
          </Link>
          <Link href='/contacts'>
              <a>contacts</a>
          </Link>
      </li>
    </ul>
  </nav>
)

export default Nav
