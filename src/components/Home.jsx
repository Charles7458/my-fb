import { useState } from "react";
import OffCanvas from 'react-bootstrap/OffCanvas';
import Header from "../parts/Header"
import LeftColumn from "../parts/LeftColumn"
import MiddleContent from "../parts/MiddleContent"
import RightColumn from "../parts/RightColumn"
import '../styles/Home.css'

import userpfp from '../assets/images/profiles/user.jpeg'
import plain from '../assets/images/plain.jpg'
import profile2 from '../assets/images/profiles/profile-2.jpeg'
import profile3 from '../assets/images/profiles/profile-3.jpeg'
import profile4 from '../assets/images/profiles/profile-4.jpeg'
import profile5 from '../assets/images/profiles/profile-5.jpeg'


export default function Home() {

    

    const users = [
        {   role: 'user',
            id: 1,
            pfpUrl: userpfp
        },
        {
            id: 2,
            role: 'friend-1',
            pfpUrl:  profile2
        },
        {
            id: 3,
            role: 'friend-2',
            pfpUrl:  profile3
        },
        {
            id: 4,
            role: 'friend-3',
            pfpUrl:  profile4
        },
        {
            id: 5,
            role: 'friend-4',
            pfpUrl: profile5
        },
    
        {
            id: 6,
            role: 'friend-5',
            pfpUrl: plain
        },
        {
            id: 7,
            role: 'friend-6',
            pfpUrl: plain
        },
        {
            id: 8,
            role: 'friend-7',
            pfpUrl: plain
        },
        {
            id: 9,
            role: 'friend-8',
            pfpUrl: plain
        },
        {
            id: 10,
            role: 'friend-9',
            pfpUrl: plain
        },
    ]

    const [showMenu, setShowMenu] = useState(false)
    return(
        <div className="AppBody">
            <Header userpfp={users[0].pfpUrl} showOffCanvas={()=>setShowMenu(true)}/>
            <div className="MainPage">
                <div className='d-none d-lg-block LeftColumn'>
                    <LeftColumn  pfp={users[0].pfpUrl}/>
                </div>
                
                <OffCanvas show={showMenu} onHide={()=>setShowMenu(false)} >
                    <OffCanvas.Header closeButton></OffCanvas.Header>
                    <OffCanvas.Body>
                        <LeftColumn />
                    </OffCanvas.Body>
                </OffCanvas>
                <MiddleContent users={users}/>

                <div className="d-none d-md-block">
                    <RightColumn />
                </div>
            </div>
        </div>
    )
}