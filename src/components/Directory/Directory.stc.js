import styled from 'styled-components'

export const StyledDiv = styled.div`
    .wrapper {
        .item {
            position: relative;
            width: 100%;
            height: 86vh;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            
            &::after {
                position: absolute;
                top: 0;
                left: 0;
                background: rgba(0,0,0, 0.3);
                z-index: 1;
                width: 100%;
                height: 100%
            }

            .text_container {
                color: #fff;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                z-index: 2;
                font-size: 2rem;
                line-height: 1;
                font-weight: 400;
                text-transform: uppercase;
                padding: 8px 10px;
                display: flex;
                flex-direction: column;
                
                h1 {
                    color: #fff;
                }
                
                a {
                    text-transform: capitalize;
                    color: #fff;
                    padding: 8px 5px;
                    justify-self: flex-end;
                }
                
            }

        }

    }
`