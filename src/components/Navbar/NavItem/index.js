import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ListItem, NavItemWrapper } from './NavItem.stc'
import Dropdown from '../Dropdown'

export default function NavItem({ text, href, icon, sublinks }){
    const [drop, setDrop] = useState(false)
    return (
        <NavItemWrapper>
            <ListItem onClick={() => setDrop(!drop)}>
                <Link 
                    to={href && href }
                >
                        {text && text}
                        {icon && icon}
                </Link>
                 {
                     sublinks ? <Dropdown drop={drop} sublinks={sublinks} />  : null
                 } {/* Dropdown component only can display if Navlink object has a sublinks key */}
            </ListItem>
        </NavItemWrapper>
    )
}