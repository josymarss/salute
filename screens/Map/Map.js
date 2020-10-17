import React, { useState,useEffect } from 'react'
import  * as Location  from 'expo-location'
// import MapboxGL from '@react-native-mapbox-gl/maps'

import {Container,WrapMap} from './styleMaps'
import Search from '../Search/Search'

export default function Map (){
    
    //config access TOKEN

    // MapboxGL.setAccessToken('pk.eyJ1Ijoiam9zeW1hciIsImEiOiJjazYzbnV0aTMwb3F2M2lwZWZsaDZhdnZoIn0.-tafWy6LSGh5OlTZSzwQcQ')

    const [myLocation, setMyLocation] = useState({})

    // const onRegion = (region) => {
    //     setMyLocation(region)
    // }

    // //setting region by default

    // useEffect(() => {
        
    //     (async () => { 

    //         let {status} = await Location.requestPermissionsAsync()

    //         if(status !== 'gratend'){
    //             // navigate to create account
    //         }
    //         //at this point was acepeted
    //         let location = await Location.getCurrentPositionAsync()

    //         setMyLocation({
    //             latitude: location.latitude,
    //             longitude: location.longitude,
    //             latitudeDelta: location.latitudeDelta,
    //             longitudeDelta: location.longitudeDelta
    //          })

    //     })()
    // },[])

    // //every time that region chahnge useEffect update the region

    // useEffect(()=>{

    //     MapboxGL.setTelemetryEnabled(false)

    // },[])

    return (
        
        <Container>

            <Search/>

            <WrapMap>

                {/* <MapboxGL.MapView
                    style={{flex:1}}
                /> */}

            </WrapMap>

        </Container>
    )
}
