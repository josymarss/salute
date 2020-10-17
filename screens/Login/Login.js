import React ,{useState} from 'react'
import * as Network from 'expo-network'
import AsyncStorage from '@react-native-community/async-storage'
import {makeLogin} from '../../Api-data'
import {
    Container,
    NameLogo,
    ImageTop,
    Input,
    Button, 
    Title, 
    CreateAccountText,
    TextButton
} from './style'

//import {Image} from 'react-native' 

// import {useFonts} from 'expo-fonts'

function Login ({navigation}) {

    const image = require('../images/illustration1.png')
    const [phone, setPhone] = useState('')
    const [pass,setPass] = useState('')

    makeLogin = async () => {
        await Network.getNetworkStateAsync().then((type,isConnected,isInternetReachable)=>{
            if(isConnected && isInternetReachable){
                if( await makeLogin(phone,pass) != null){
                    AsyncStorage.setItem(pass,phone).then(res=> navigation.navigate('Home'))
                }
            }
        })
       
    }

    return(
        <Container>

        <NameLogo>Salute</NameLogo>

        <ImageTop source={image}/>

        <Title>Mais do que encontrar, encontre rápido.</Title>

         <Input 
            placeholder='número de tel'
            onChangeText={(phone) => setPhone(phone)}
            autoCompleteType='off'
            autoCorrect={false}
            keyboardType='numeric'
        />
            
        <Input 
            placeholder='password'
            onChangeText = {(password) =>setPass(password)}
            autoCompleteType='password'
            autoCorrect={false}
        />

        <Button>
            <TextButton size={12} onPress={makeLogin}>Login</TextButton>
        </Button> 

        <CreateAccountText onPress={() => console.log('create account') }>
            <TextButton color='#3284FF' size={12}>Create account.</TextButton>
        </CreateAccountText>

        </Container>
    );
}

export default  Login;