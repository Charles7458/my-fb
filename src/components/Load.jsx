import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import fbLogo from '../assets/images/facebook-logo.webp';


export default function Load() {

    let nav = useNavigate()

    useEffect( () => {
        setTimeout( ()=>{
            nav('/home')
        },5000)
    },[])

    return(
        <div className='container-fluid  my-5 text-center'>
            <img src={fbLogo} height='100px' className='my-5 mx-auto d-block'/>
            <div className='spinner-border' role='status'>
                <span className='visually-hidden'>Loading...</span>
            </div>
        </div>
    )
}