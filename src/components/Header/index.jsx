import React, { useContext } from 'react'
import { useMutation, useApolloClient } from '@apollo/react-hooks'
import Router, { useRouter } from 'next/router'
import Link from 'next/link'
import cn from 'classnames'

import UserContext from 'context/UserContext'
import { logoutMutation } from 'requests'
import { navLinks } from './links'

import './styles.scss'

const SiteLink = ({ label, link, icon }) => {
  const isActivePath = Router.pathname === link
  return (
    <Link href={link}>
      <a className={cn('nav__link', { active: isActivePath })}>
        {icon && <i className={`ion-${icon}`} />}
        {label}
      </a>
    </Link>
  )
}
const Header = () => {
  const router = useRouter()
  const client = useApolloClient()
  const currentUser = useContext(UserContext)
  const [logOut] = useMutation(logoutMutation)

  const handleLogout = async (e) => {
    // e.preventDefault()
    await logOut()
    client.resetStore()
    await router.replace('/login')
  }

  return (
    <header className="header">
      <div className="container">
        <span className="logo">
          <Link href="/">
            <a>TNT-Bank</a>
          </Link>
        </span>

        {currentUser && currentUser !== null ? (
          <>
            <nav className="nav">
              <ul className="nav__list">
                {navLinks.map(({ id, label, link, icon }) => (
                  <li className="nav__item" key={id}>
                    <SiteLink label={label} link={link} icon={icon} />
                  </li>
                ))}
              </ul>
            </nav>

            <button
              type="button"
              className="nav__link"
              onClick={(e) => handleLogout(e)}
            >
              Logout
            </button>
          </>
        ) : (
          <div style={{ display: 'flex' }}>
            <Link href="/login">
              <a className="nav__link">Login</a>
            </Link>
            <Link href="/register">
              <a className="nav__link">Register</a>
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
