import '../styles/RightColumn.css'

import concertImg from '../assets/images/right-column-images/concert.png';
import reqpfp from '../assets/images/right-column-images/friendreq.png';
import uxid from '../assets/images/right-column-images/uxid.png';
import cont1 from '../assets/images/right-column-images/contact-1.webp';
import cont2 from '../assets/images/right-column-images/contact-2.png';
import cont3 from '../assets/images/right-column-images/contact-3.png';
import cont4 from '../assets/images/right-column-images/contact-4.png';


function Contact({img, name, isOnline}){
    return(
        <div className='contact-div'>
            <div className='d-flex'>
                <img src={img} height='100%' width='60px' alt='contact profile picture' style={{borderRadius:'5px'}}/>
                <div className='ms-3'>
                    <b>{name}</b>
                    {isOnline ? <div className='d-flex' style={{alignItems:'center', fontSize:'10px'}}><div className='g-circle'></div><b className='ms-1 text-success'>Online</b></div> : 
                    <div className='d-flex' style={{alignItems:'center', fontSize:'10px'}}><div className='o-circle'></div><b className='ms-1 text-warning'>Offline</b></div>}
                </div>
            </div>
            
            <i className='fa-solid fa-comment-medical chat-icon'></i>
        </div>
    )
}

export default function RightColumn() {

    const contacts = [{id:1, name: 'John Wick',img: cont1, online:false}, {id:2, name: 'Vanessa',img: cont2, online:true}, {id:3, name: 'Robert',img: cont3, online:true},
        {id:4, name: 'Chill Guy',img: cont4, online:false}]

    return (
        <div className='d-none d-lg-block' style={{minWidth:'400px',maxWidth:'40vw',borderRadius:'20px',paddingRight:'20px'}}>
            {/* card 1 begins */}
            <div className='rc-card bg-light'>
                <div className='card-1-header'>
                    <h5 className='blue'>Upcoming Events</h5>
                        <a className='mb-1 link' href='#Events'>
                        <i className='ms-3 blue fa-solid fa-arrow-right'></i></a>
                    
                </div>
                <img src={concertImg} className='mt-2' height='150px' width='100%' alt='event picture'/>
                <div>
                    <div style={{display:'grid', gridTemplateColumns:'70px 1fr',marginTop:'5px'}}>{/*date */}
                        <div className='date-wrapper'><p className='month'>July</p><p className='date'>29</p></div>
                        <div style={{lineHeight:'20px',fontSize:'14px', marginTop:'5px'}}>
                            <b>KODALINE Live in Jakarta</b>
                            <p className='text-secondary'>Indonesia</p>
                        </div>
                    </div>
                    <button className='interested mb-2'><i className='fa-regular fa-star me-2'></i>I'm Interested</button>
                    <hr className='mt-3 mb-2'/>

                    <div className='card-1-header'>
                    <h5 className='blue'>Friend Requests</h5>
                        <a className='mb-1 link' href='#Events'>
                        <i className='ms-3 fa-solid fa-arrow-right'></i></a>
                    </div>
                    <div className='my-1 px-3'>
                        <div className='d-flex'>
                            <img className='me-3 rounded-circle friendreq' src={reqpfp} alt='friend request profile picture'/>
                            <div>
                                <p style={{fontSize:'13px'}}><b>Itachi</b> sent you a friend request</p>
                                <div className='d-flex'>
                                    <button className='confirm-btn'>Confirm</button>
                                    <button className='ms-2 delete-btn'>Delete</button>
                                </div>
                            </div>
                        </div>       
                    </div>
                </div>
            </div>
            {/* card1 ends */}

            {/* Create Pages & Gorups */}
            <div className='rc-card bg-light' style={{paddingBottom:'5px'}}>
                <div className='d-flex mb-3' style={{alignItems:'center', justifyContent:'space-between'}}>
                    <div className='d-flex'style={{alignItems:'center'}}>
                        <button className='create-pg-btn'><i className='fa-solid fa-plus create-pgs-icon'></i></button>
                        <h5 className='ms-3'>Create Pages and Groups</h5>
                    </div>
                    <i className='fa-solid fa-magnifying-glass fa-lg' ></i>
                </div>

                <div>
                    <img src={uxid} width='100%' className='mb-2' alt='community image'/>
                    <div className='d-flex' style={{justifyContent:'space-between'}}>
                        <div style={{fontSize:'13px'}}>
                            <b>UXID (UI Community in Indonesia)</b>
                            <p style={{color:'gray',fontWeight:'500'}}>38K Members</p>
                        </div>
                        <button className='join-grp-btn'>Join Group</button>
                    </div>
                </div>
            </div>
            {/* end */}

            {/* Contacts */}
            <div className='rc-card-3 bg-light'>
                <div className='d-flex' style={{height:'50px',alignItems:'center', justifyContent:'space-evenly'}}>
                    <button className='create-pg-btn' style={{color:'white'}}><i className='fa-solid fa-user-group'></i></button>
                    <h5>Contacts</h5>
                    <input type='text' placeholder='Search' style={{width:'150px', padding:'5px 20px', borderRadius:'30px'}}/>
                    <i className='fa-solid fa-sliders'></i>
                </div>
                {/* seaprate div for positioning search icon */}
                <div className='d-flex' style={{justifyContent:'center'}}>
                    <i className='fa-solid fa-magnifying-glass contact-search-icon' ></i>
                </div>

                {/* contact */}
                {contacts.map( (contact) => {
                   return  <Contact key={contact.id} img={contact.img} name={contact.name} isOnline={contact.online}/>
                })}
            </div>
    </div>
    )
}