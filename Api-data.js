import axios from 'axios';

export default class Data {

    constructor(){

        axios = axios.create({
            baseURL: 'localhost:/4000/salute-api'
        })

    }
    // User settings

    //get specific user
    getUser(id){
         axios.get(`/user/${id}`)
        .then(data => {
            data.user ? true : false
        })
    }
    //makeLogin 
    makeLogin(number,password){
        var numbered = parseInt(number)

        axios.get('/login',{numbered,password}).then(res=>{
            res.user ? res.user : null
        })
    }
    //get all users 
    getUsers(){
        return axios.get(`/user`)
    }
    //create new user
    createUser(user){
        axios.post(`/user/create`, user).then(res =>{
            res.data.user != null ?  true : false
        })  
    }
    //change password 
    changePassword(userId, newPass){
        // send message to contact to confirm the new password 
        axios.put(`/user/update/:${userId}`, newPass);
    }
    //Hospital settings 

    //get a specific hospital 
    getHospital(id){
        return axios.get(`/hospitals/${id}`);
    }
    //get all hospitals
    getHospitals(){
        return axios.get(`/hospitals`);
    }
    // add user medic to specific hospital 
    addNewMedic(user){
        axios.post(`/hospitals/create`, user)
        .then()
        .catch();
    }
    // delete a medic from some hospital 
}