import React from 'react'
import { Menu } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { Link as NavLink } from 'react-router-dom'

// ACTIONS
import { signOutUserStart } from '../../../redux/user/user.actions'

// SELECTORS 
import { selectCartItemsCount } from './../../../redux/cart/cart.selectors'

const SubMenu = Menu.SubMenu
const MenuItemGroup = Menu.ItemGroup

const mapState = (state) => ({
    currentUser: state.user.currentUser,
    totalNumCartItems: selectCartItemsCount(state)
})

export default function RightMenu(){
    const dispatch = useDispatch()
    const { currentUser, totalNumCartItems } = useSelector(mapState)

    const signOut = () => {
        dispatch(signOutUserStart())
    }

    return (
      <Menu mode="horizontal">
          {currentUser && [
            <Menu.Item key="con">
              <NavLink to='/cart'>Cart({totalNumCartItems})</NavLink>
            </Menu.Item>,
            <Menu.Item key="mail">
              <NavLink to='/dashboard'>Profile</NavLink>
            </Menu.Item>,
            <SubMenu title={<span>Settings</span>}>
                <MenuItemGroup>
                    <Menu.Item key="setting:1" onClick={() => signOut()}>Sign Out</Menu.Item>
                </MenuItemGroup>
            </SubMenu>
          ]}
        
          {!currentUser && [
            <Menu.Item key="con">
              <NavLink to='/cart'>Cart({totalNumCartItems})</NavLink>
            </Menu.Item>,
            <Menu.Item key="mail">
              <NavLink to='/login'>Sign In</NavLink>
            </Menu.Item>,
            <Menu.Item key="app">
              <NavLink to='/registration'>Sign Up</NavLink>
            </Menu.Item>
          ]}
    </Menu >
    )
}


