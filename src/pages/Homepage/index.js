import React from 'react'
import styled from 'styled-components'
import Directory from '../../components/Directory'
import Hero from '../../components/Sections/Hero'
import About from '../../components/Sections/About'

const StyledSection = styled.section`
    height: calc(100% - 6.5rem);
`

export default function Homepage(){
    return(
        <StyledSection>
            
            
            <Hero />
            {/* <Directory /> */}
        </StyledSection>
    )
}   
