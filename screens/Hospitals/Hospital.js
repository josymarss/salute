import React from 'react'

import {Container,Detail} from './style'
import {Avatar,Name,Stability} from '../global'



const Hospital = ()=>{
   
    return(

        <Container>

            <Detail>

                <Avatar source={{uri:uri}}></Avatar>
                <Name>Dr Veloso</Name>

            </Detail>
            
            <Stability stability='good'></Stability>
            

        </Container>

    )
}
export default Hospital;