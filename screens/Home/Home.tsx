import React, { Component } from 'react'
import { ScrollView } from 'react-native-gesture-handler'


import {Container} from './homeStyle'
import Search from '../Search/Search'
import Card from '../Card/Card'
import data from './fakedata'

interface Data {
    id:number,
    name:string,
    avatar:string,
    description:string,
    image:string,
    stability:string
}
const Home: React.FC = () => {
    
    return(
        
        <Container>

            <Search/>

            <ScrollView>

                <Card/>
                <Card/>
                <Card/>
                <Card/>
                
            </ScrollView>  

        </Container>

    );
}

export default Home 