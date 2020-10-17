import React from 'react'
import {Image} from 'react-native'

import {Avatar, Name, Stability} from '../global'
import {
    CardPoster,
    Header,
    Body,
    Footer,
    Description,
} from './cardStyle'

const uri = 'https://miro.medium.com/max/512/1*3o8TOSojT64ChGpjop0USA.png'
const description = 'some description here, should appear and yeah googd?'
const name = 'Maria Pia'

const Card = (props) => (

    <CardPoster>

        <Header>
        
            <Avatar
                source={{uri:'https://miro.medium.com/max/512/1*3o8TOSojT64ChGpjop0USA.png'}}
            >
            </Avatar>

            <Name>{name.toLowerCase().replace(' ', '')}</Name> 

        </Header>

       <Body source={{uri:'https://miro.medium.com/max/512/1*3o8TOSojT64ChGpjop0USA.png'}}>


        </Body>

        <Footer>

             <Description>

                {   description.length>=45?
                    description.substring(0,45)+'...':
                    description
                }

            </Description> 

            <Stability stability='bad'></Stability>

        </Footer>  

    </CardPoster>
)

export default Card;