import React from 'react'
import styled from 'styled-components'

import {Avatar,Name,Description} from '../global'


function User ({props}) {

    return(

        <Container>

            <Avatar 

                source={props.avatar}>

            </Avatar>

            <Name>{props.name}</Name>

        </Container>

    )
}

const Container = styled.View`
    height:55px;
    background-color:#1f1f1f;
    flex-direction:row;
`

export default User