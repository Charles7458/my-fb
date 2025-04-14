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
        <div className='d-flex' style={{minHeight:'100vh',justifyContent:'center',alignItems:'center'}}>
            <div>
                <img src={fbLogo} height='100px' className='my-5 mx-auto d-block'/>
                <div className='spinner-border mx-auto d-block' role='status'>
                    <span className='visually-hidden'>Loading...</span>
                </div>
            </div>
            
        </div>
    )
}