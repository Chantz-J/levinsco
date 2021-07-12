import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import NavItem from './NavItem'
import { NavbarContainer, 
        LinksWrapper, 
        ActionsWrapper,
        InnerWrapper,
        LogoWrapper  } from './Navbar.stc'

import { noUserNavlinks, userNavlinks} from './Navlinks'
import { Badge } from 'antd'
import { UserOutlined, InboxOutlined } from '@ant-design/icons'
import Leaves from '.././../assets/leaf.png'

// ACTIONS
import { signOutUserStart } from '../../redux/user/user.actions'
// SELECTORS 
import { selectCartItemsCount } from '../../redux/cart/cart.selectors'
// NOTIFICATIONS
import { googleSignOutNotification } from './../../redux/user/user.notifs'      



const mapState = (state) => ({
    currentUser: state.user.currentUser,
    totalNumCartItems: selectCartItemsCount(state)
})


export default function Navbar(){
    const dispatch = useDispatch()
    const { currentUser, totalNumCartItems } = useSelector(mapState)

    const signOut = () => {
        dispatch(signOutUserStart())
        googleSignOutNotification()
    }
    return (
        <NavbarContainer>
            <ActionsWrapper>
                <Link to='/'>
                    <LogoWrapper>
                        <img src={Leaves} alt='logo'/> 
                        <span>Alafia.</span>
                    </LogoWrapper>
                </Link>
                <Link to="/cart">
                    <Badge count={totalNumCartItems}>
                        <InboxOutlined  style={{ fontSize: '3.1rem', color: '#000' }} />
                    </Badge>
                </Link>
                <Link to='/dashboard' style={{ marginLeft: '2rem'}}>
                    <UserOutlined style={{ fontSize: '2.7rem', color: '#000' }} />
                </Link>
            </ActionsWrapper>
            <LinksWrapper>
                <InnerWrapper>
                    {
                        !currentUser && (noUserNavlinks.map(nav => {
                            return (
                                <NavItem 
                                    text={nav.text}
                                    href={nav.href}
                                    sublinks={nav.sublinks}
                                />
                            )
                        }))
                    }
                    {
                        currentUser && (userNavlinks.map(nav => {
                            return (
                                <NavItem 
                                    text={nav.text}
                                    href={nav.href}
                                    sublinks={nav.sublinks}
                                />
                            )
                        }))
                    
                    }
                </InnerWrapper>
            </LinksWrapper>
        </NavbarContainer>
    )
}
