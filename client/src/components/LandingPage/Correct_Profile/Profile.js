import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

import './index.css'
import Personal from './Personalprofile'

const Profile = async()=>{
    const [edit,setEdit] = useState(false)
    
    const userUpdate = useSelector((state)=>state.userUpdate)
    const user = JSON.parse(localStorage.getItem('profile'))
    const navigate = useNavigate()
    const userInfo = await useSelector((state)=>state.auth)
    if (!userInfo){
        console.log(userInfo)
        navigate('/')
    }else{

    }
    return(
        <div className='container'>
            {
                edit ? (
                    <div></div>
                ) : (
                     <Personal edit={edit} setEdit={setEdit} userUpdate={userUpdate}/>   
                    )
            }
        </div>
    )
}

export default Profile