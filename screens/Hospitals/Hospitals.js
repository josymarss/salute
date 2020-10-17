import React,{useEffect,useState} from 'react'
import { ScrollView } from 'react-native-gesture-handler'

import {Hospital} from './Hospital'
import {getHospitals} from '../../Api-data'



const Hospitals = () => {

    const uri = 'https://miro.medium.com/max/512/1*3o8TOSojT64ChGpjop0USA.png'

    const [hospitals, setHospital] = useState([])

    useEffect(() => {
        hospitals = getHospitals()
    },[])
    
    return(

    <ScrollView>

        {hospitals.map(hosp => {
            <Hospital/>
        })}
        
    </ScrollView>

    )
    
}

export default Hospitals;