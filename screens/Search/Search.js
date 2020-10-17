import React,{useState} from 'react'
import {Platform}from 'react-native'
import { Ionicons as Icon } from '@expo/vector-icons'

import {Container,TextInputType,Button} from './style'

function Search () {

    const [textSearched, setSearch] = useState('')
    
    handleSearch = (e) => {
        setSearch(e)
    }

    makeSearch = () => {
        //console.log(textSearched) make search on api 
    }

    return(

        <Container>

             <TextInputType
                placeholder='Search'
                onChangeText={(text) => handleSearch(text)}
            />

            <Button>

                <Icon 
                    name={Platform.OS =='ios'?'ios-search':'md-search'}
                    color='#3284FF' 
                    size={26} 
                    onPress={makeSearch}  
                />

            </Button>

        </Container>
       
    );
}

export default Search;