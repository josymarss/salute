import React,{useState,useEffect} from 'react'
import AsyncStorage from '@react-native-community/async-storage';

import { createUser } from '../../Api-data'
import {
    Container,
    NameLogo,
    ImageTop,
    Input,
    Button, 
    TextButton
} from './style'

import Routes from '../Routes'

const CreateAccount = ({navigation}) => {

    const logo = require('../images/illustration1.png')

    const [userNumber, setNumber] = useState('')// should make parseInt before save on database
    const [pass, setPass] = useState('')

    useEffect(()=>{
        //chek the internet connection 
    },[])

    //converting the number to regular ao number

    orginizeNumber = () =>{

        let aux = userNumber
        let goodNumber =''
        let conserted = aux.split(' ')

        for(let i=0; i < conserted.length; i++){
            if(typeof(parseInt(conserted[i])) == 'number'){
                goodnumber =+ conserted[i]
            }
            
        }

        setNumber(goodNumber)
    }
    
    //confirm the data before saving

    ConfirmPass = (text) =>{

        if(text !== pass ){
            alert('Palavra passes devem ser iguais e')
            return
        }
        if(userNumber.length>9 || userNumber.length < 9 || typeof(parseInt(usernumber)) != typeof(2)){
            alert('o numero deve extar nesse formato 9XX XXX XXX')
            return
        }
        // at this point insert into data base
        phone = parseInt(userNumber)

        const user = { 
            name,
            phone,
            password
        }
        if(createUser(user)) navigation.navigate('Home')
    }

    combinedFunctions = () => {
        
        orginizeNumber()
        confirm()
        
        (async () =>  {
            await AsyncStorage.setItem('salute-user', {name,phone,password})
        })()

    }

    return(

        <Container>

            <ImageTop source={logo}/>

            <NameLogo>Crie uma conta e tenha mais segurança</NameLogo>

            <Input
                placeholder='número'
                onChangeText = {(number) =>setNumber(number)}
                autoCompleteType='number'
                autoCorrect={false}>
            </Input>
            <Input
                placeholder='password'
                onChangeText = {(password) =>setPass(password)}
                autoCompleteType='password'
                autoCorrect={false}>
            </Input>
            <Input
                placeholder='confimrar password'
                onChangeText = {(Confpassword) =>ConfirmPass(Confpassword)}
                autoCompleteType='password'
                autoCorrect={false}>
            </Input>

            <Button>
                <TextButton size={12} onPress={combinedFunctions}>Criar conta</TextButton>
            </Button> 
        </Container>
    )
}

export default CreateAccount