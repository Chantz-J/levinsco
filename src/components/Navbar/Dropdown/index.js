import React from 'react'
import { Link } from 'react-router-dom'
import { DropdownWrapper, DropdownItem } from './Dropdown.stc'

export default function Dropwdown({ sublinks, drop }){
    return (
        <DropdownWrapper 
            style={{display: drop ? 'block' : 'none'}}
        >
            {
                sublinks.map(link => {
                    return (
                        <DropdownItem 
                            key={link.href} 
                            to={link.href}
                        >
                            {link.subtext}
                        </DropdownItem>
                    )
                })
            }
        </DropdownWrapper>
    )
}