import React, { Component} from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
    display: block;
    width: 100%;
    max-width: 40.0rem;
    border: 1px solid black;
    margin: 4rem auto 6rem;

    .wrap {
        padding: 10px;

        h2 {
            font-size: 2.2rem;
            line-height: 1;
            font-weight: 400;
            text-transform: uppercase;
            display block;
            width: 100%;
            text-align: center;
            padding: 0;
            margin: 0 auto;
        }

        .socialSignIn {
            margin: 2rem auto;
        }

    }

`

class SignUp extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <StyledDiv>
                <div className="wrap">
                    <h2>SignUp</h2>
    
                    <form></form>
                </div>
            </StyledDiv>
        )
    }
}


export default SignUp