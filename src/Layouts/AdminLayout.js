import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { signOutUserStart } from './../redux/user/user.actions'
import { Global } from '../styles/global'

import Header from './../components/Header'
import Navbar from './../components/Navbar'
import VerticalNav from './../components/VerticalNav'
import Footer from './../components/Footer'

export default function AdminLayout(props){
  const dispatch = useDispatch()

  const signOut = () => {
    dispatch(signOutUserStart())
  }

  return (
    <div className="adminLayout">
      <Global/>
      {/* <Header {...props} /> */}
      <Navbar {...props} />
      <div className="controlPanel">
        <div className="sidebar">
          <VerticalNav>
            <ul>
              <li>
                <Link to="/admin">
                  Home
                </Link>
              </li>
              <li>
                <span className="signOut" onClick={() => signOut()}>
                  Sign Out
                </span>
              </li>
            </ul>
          </VerticalNav>
        </div>
        <div className="content">
          {props.children}
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  )
}

 