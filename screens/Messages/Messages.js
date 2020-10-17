import React from 'react'

import Message from './Message'
import User from '../User/User'
import {
    Container,
    Header,
    Body,
} from './messageStyle'


const Messages = () => {
    //return the Message component

    return(
        <Container>

            <Header>

               <User 
                    name='Clinica Girassol'
                    avatar={require('../images/illustration1.png')}
                />
                
            </Header>

            <Body>

                <Message
                    name='josymarss'//should be the name of the user's comment
                    avatar={require('../images/illustration1.png')}
                    comment='Geralment esse hospital atende bem'
                />

            </Body>

        </Container>
    )
}

export default Messages