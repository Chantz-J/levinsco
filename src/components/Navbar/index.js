import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import NavItem from './NavItem'
import { NavbarContainer, 
        LinksWrapper, 
        ActionsWrapper,
        InnerWrapper  } from './Navbar.stc'

import { noUserNavlinks, userNavlinks} from './Navlinks'
import { Badge } from 'antd'
import { UserOutlined, InboxOutlined } from '@ant-design/icons'

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
                <Link to="/cart">
                    <Badge count={totalNumCartItems}>
                        <InboxOutlined  style={{ fontSize: '4rem', color: '#000' }} />
                    </Badge>
                </Link>
                <Link to='/dashboard' style={{ marginLeft: '2rem'}}>
                    <UserOutlined style={{ fontSize: '3.2rem', color: '#000' }} />
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
