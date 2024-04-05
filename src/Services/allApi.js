
import { baseurl } from "./baseUrl"; 
import { commonAPI } from "./commonApi";

//register api
export const registerAPI = async(user) => {
    return await commonAPI('post',`${baseurl}/register`, user ,'')
}

//login api
export const loginAPI = async(user)=>{
    return await commonAPI('post',`${baseurl}/login`,user , '')
}

//get all pet pet (get dont have body)
export const getAllPetsAPI = async(searchKey)=>{
    return await commonAPI('get',`${baseurl}/allpets?search=${searchKey}`,"","")
}

//get a particular pet 
export const getParticularPetAPI = async (id)=>{
    return await commonAPI('get',`${baseurl}/pets/${id}`,"","")
} 

//get all doctors
export const getAllDoctorsAPI = async()=>{
    return await commonAPI('get',`${baseurl}/alldoctors`,"","")
}

//get particular dr
export const getParticularDrAPI = async(id)=>{
    return await commonAPI('get',`${baseurl}/doctors/${id}`,"","")
}

//appoinment
export const appoinmentAPI = async(data , id)=>{  
    return await commonAPI('post',`${baseurl}/appointment/${id}`,data,"")
}


//get all appointments
export const getAllAppointmentsAPI = async()=>{
    return await commonAPI('get',`${baseurl}/allAppointments`,"","")
}

//admin login
export const adminLoginAPI = async(data )=>{  
    return await commonAPI('post',`${baseurl}/adminLogin`,data, '')
}
