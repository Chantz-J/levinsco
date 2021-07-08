import React from 'react'
import styled from 'styled-components'
import { StyledAuth } from './AuthWrapper.stc'

import {
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react'


export default function AuthWrapper({ headLine, children}){
    return (
        <StyledAuth>
            <div className="wrap">
                {/* { headLine && <h2>{headLine}</h2>}
                <div className="children">
                    {children && children}
                </div> */}
                {headLine && <Heading fontSize={'4xl'}>{headLine}</Heading>}
                <Box
                    maxWidth={'40.0rem'}
                    margin={'4rem auto 6rem'}
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    {children && children}
                </Box>
            </div>
        </StyledAuth>
    )
}