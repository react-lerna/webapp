import React from 'react'
import Link from 'next/link'

const Nav = () => (
  <nav>
    <ul>
      <li>
          <Link href='/'>
              <a>Home</a>
          </Link>
          <Link href='/blog'>
              <a>Blog</a>
          </Link>
          <Link href='/shop'>
              <a>Shop</a>
          </Link>
      </li>
    </ul>
  </nav>
)

export default Nav
