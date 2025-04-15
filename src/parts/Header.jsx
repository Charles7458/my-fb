
import '../styles/header.css'
import Dropdown from 'react-bootstrap/Dropdown'
import fbIcon from '../assets/images/fb-logo.png'



export default function Header({userpfp, showOffCanvas}) {
    return(
        <div className='header shadow'>
            <div className="navbar shadow no-wrap">
                <span>
                    <button className='btn menu-btn d-xxl-none' onClick={showOffCanvas}><i className='fa-solid fa-bars'></i></button>
                    <img alt='facebook icon' src={fbIcon} className='logo'/>
                </span>
                
                <ul className='nav'>
                    <li><input type='text' placeholder='Search' className='only-desk' style={{textAlign:'start',padding:'0px 20px 0px 20px',borderRadius: 'clamp(20px, 10vw, 30px)',
    height: '40px', width: 'clamp(130px, 15vw, 300px)'}}/></li>
                    <li><i className="fa-solid fa-magnifying-glass rel-icon only-desk"></i></li>
                    <li><Dropdown className='only-android'>
                            <Dropdown.Toggle title='Account' variant='dark' className='' data-bs-toggle='dropdown' aria-expanded={false} style={{backgroundColor:'transparent',padding:'0px',border:'none'}}>
                                <i type='button' class="fa-solid fa-magnifying-glass search-btn"></i>
                            </Dropdown.Toggle>
                            <Dropdown.Menu className='dropdown-menu'>
                                <div style={{padding:'10px 30px',display:'flex',width:'40vw'}}>
                                    <input type='text' placeholder='Search' style={{textAlign:'start',padding:'0px 20px 0px 20px',borderRadius: '20px',height:'40px'}}/>
                                    <i type='button' class="fa-solid fa-magnifying-glass search2"></i>
                                </div>
                            </Dropdown.Menu>
                        </Dropdown></li>
                </ul>

                <ul className='nav nav2 only-desk'>
                    <li><i title='Home' className='fa-solid fa-house'></i></li>
                    <li><i title='Groups' className='fa-solid fa-user-group only-desk'></i></li>
                    <li><i title='Videos' className='fa-solid fa-video only-desk'></i></li>
                    <li><i title='Games' className='fa-solid fa-gamepad only-desk'></i></li>
                </ul>
                <i title='Home' className='fa-solid fa-house only-android'></i>

                <ul className='nav nav3 only-md'>
                    <li><button title='Add Post' className='btn btn-light'><i class="fa-solid fa-plus"></i></button></li>
                    <li><button title='Messenger' className='btn'><i class="fa-brands fa-facebook-messenger"></i></button></li>
                    <li><button title='Notifications' className='btn'><i class="fa-solid fa-bell"></i></button></li>


                <Dropdown >
                    <Dropdown.Toggle title='Account' variant='light' className='dropdown-toggle me-3' type='button' data-bs-toggle='dropdown' aria-expanded={false} style={{backgroundColor:'transparent',padding:'0px',border:'none'}}>
                        <img alt='user profile picture' src={userpfp} height='35px' width='35px' className='rounded-circle'/>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className='dropdown-menu'>
                        <Dropdown.Item href='#'>Profile</Dropdown.Item>
                        <Dropdown.Item href='#'>Settings</Dropdown.Item>
                        <Dropdown.Item href='#' className='text-danger'>Logout</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                </ul>

                <button title='Add Post' className='btn btn-light only-sm'><i class="fa-solid fa-plus"></i></button>
                <button title='Notifications' className='btn only-sm'><i class="fa-solid fa-bell"></i></button>

                <Dropdown className='only-sm'>
                    <Dropdown.Toggle title='Account' variant='light' className='dropdown-toggle me-3' type='button' data-bs-toggle='dropdown' aria-expanded={false} style={{backgroundColor:'transparent',padding:'0px',border:'none'}}>
                        <img alt='user profile picture' src={userpfp} width='30px' className='rounded-circle'/>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className='dropdown-menu'>
                        <Dropdown.Item href='#'>Profile</Dropdown.Item>
                        <Dropdown.Item href='#'>Settings</Dropdown.Item>
                        <Dropdown.Item href='#' className='text-danger'>Logout</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

            </div>
        </div>
        
    )
}