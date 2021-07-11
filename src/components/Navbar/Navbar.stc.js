import styled from 'styled-components'

export const NavbarContainer = styled.nav`
    width: 100%;
    height: 80px;
    background-color: white;
    box-shadow: 0 0.125rem 0.375rem 0 rgba(0, 0, 0, 0.12); 
    display: flex;
    align-items: center;
    justify-content space-between;
`

export const LinksWrapper = styled.div`
    align-items: center;
    display: flex;
    width: 100%;
    padding: 0 3rem;
    justify-content flex-end;
`
export const InnerWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content space-between;
`

export const ActionsWrapper = styled.div`
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content center;
`