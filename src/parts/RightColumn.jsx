import '../styles/RightColumn.css'

import partyImg from '../assets/images/right-column-images/party.png';

export default function RightColumn() {
    return (
        <div style={{height:'100vh',width:'100%',borderRadius:'20px',display:'flex'}}>
            <div className='rc-card'>
                <div className='card-1-header'>
                    <h4 className='blue'>Upcoming Events</h4>
                        <a className='mb-1 link d-none d-lg-block' href='#Events'>
                        <i className='ms-3 blue fa-solid fa-arrow-right'></i></a>
                    
                </div>
                <img src={partyImg} className='img-fluid mt-3 mb-1'/>
                <div>
                    <div style={{display:'grid', gridTemplateColumns:'80px 1fr'}}>
                        <div className='date-wrapper'><p className='month'>July</p><p className='date'>29</p></div>
                        <div style={{lineHeight:'20px',padding:'10px 0px'}}>
                            <p style={{marginBottom:'5px', fontWeight:'500'}}>KODALINE Live in Jakarta</p>
                            <p className='text-secondary'>Indonesia</p>
                        </div>
                    </div>
                    <button className='interested mb-4'><i className='fa-regular fa-star me-2'></i>I'm Interested</button>
                    <hr/>

                    <div className='card-1-header'>
                    <h4 className='blue'>Friend Requests</h4>
                        <a className='mb-1 link d-none d-lg-block' href='#Events'>
                        <i className='ms-3 blue fa-solid fa-arrow-right'></i></a>
                    
                    </div>
                </div>
            </div>
        </div>
    )
}