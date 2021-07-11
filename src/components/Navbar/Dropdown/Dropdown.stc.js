import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const DropdownWrapper = styled.div`
    position: absolute;
    height: 100px;
    padding: .5rem;
    border-radius: 8px;
    background: white;
    box-shadow: 0 0.125rem 0.375rem 0 rgba(0, 0, 0, 0.12); 
    margin-top: 1rem;
    z-index: 1
    transition: all 0.5s ease 
`

export const DropdownItem = styled(Link)`
    padding: 1rem;
    border-radius: 8px;
    z-index: 1
`