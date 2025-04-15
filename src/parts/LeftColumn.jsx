import '../styles/LeftColumn.css';

import pgs1 from '../assets/images/left-column-images/pages-1.png';
import pgs2 from '../assets/images/left-column-images/pages-2.png';
import pgs3 from '../assets/images/left-column-images/pages-3.png';
import grp1 from '../assets/images/left-column-images/grp-1.webp';
import grp2 from '../assets/images/left-column-images/grp-2.jpg';
import grp3 from '../assets/images/left-column-images/uxid.png';
import gms1 from '../assets/images/left-column-images/games-1.png';
import gms2 from '../assets/images/left-column-images/games-2.png';
import gms3 from '../assets/images/left-column-images/games-3.png';
import gms4 from '../assets/images/left-column-images/games-4.jpg';


function List({title, children}){
    return(
        <div style={{marginBottom:'20px'}}>
            <h6 className='List-head'>{title}</h6>
            <ul className='nav flex-column ms-2'>
                {children}
            </ul>
        </div>
    )
}

function ListItem({img, name}) {
    return(
        <li className='nav-item mb-2'>
            <a href="#/home" className='nav-link' style={{padding:'0'}} alt='link image'>
                <img className='rounded-circle' src={img} height="30px" width="30px" style={{backgroundColor:'rgb(231, 231, 231)', marginRight:'15px'}}/>
                <b style={{fontSize:'12px', fontWeight:'400', color:'black'}}>{name}</b>
            </a>
        </li>
    )
}

function GameListItem({img, name}) {
    return(
        <li className='nav-item mb-2'>
            <a href="#/home" className='nav-link' style={{padding:'0'}} alt='link image'>
                <img src={img} height="30px" width="30px" style={{backgroundColor:'rgb(231, 231, 231)', marginRight:'15px', borderRadius:'5px'}}/>
                <b style={{fontSize:'12px', fontWeight:'400', color:'black'}}>{name}</b>
            </a>
        </li>
    )
}

function ExploreItem({children, title}){
    return(
        <li className=' mb-3' style={{alignItems:'center', verticalAlign:'middle'}}>
            <a href='#/home' style={{textDecoration:'none'}}>
                {children}
                <b className='ms-3' >{title}</b>
            </a>
        </li>
    )
}

export default function LeftColumn({pfp}) {

    const pages=[{name: 'messenger',img: pgs1}, {name: 'instagram',img: pgs2},{name: 'threads',img: pgs3} ]
    const groups=[{name: 'Illustration Art Community',img: grp1}, {name: 'Design Community',img: grp2},{name: 'UXID',img: grp3} ]
    const games=[{name: 'Ludo Club',img: gms1}, {name: 'Angry Birds',img: gms2},{name: 'Words',img: gms3}, {name: 'Solitaire', img: gms4} ]


    return (
        <div className="LeftColumn bg-light" >
            <div className="d-flex mb-3" >
                <img className='rounded-circle' src={pfp} height='30px' width='30px' style={{marginRight:'20px'}}/>
                <h5>My username</h5>
            </div>
            <List title='Pages'>
                {pages.map( (page)=> <ListItem key={page.name} img={page.img} name={page.name}/>)}
            </List>
            <List title='Groups'>
                {groups.map( (group)=> <ListItem key={group.name} img={group.img} name={group.name}/>)}
            </List>
            <List title='Games'>
                {games.map( (game)=> <GameListItem key={game.name} img={game.img} name={game.name}/>)}
            </List>

            <div className='mb-3 px-2'>
                <h6 className='List-head mb-3'>Explore</h6>
                <ul className='nav flex-column'>
                    <ExploreItem title='Groups'><i className='fa-solid fa-user-group'></i></ExploreItem>
                    <ExploreItem title='Favorites'><i className='fa-solid fa-star'></i></ExploreItem>
                    <ExploreItem title='Saves'><i className='fa-solid fa-bookmark'></i></ExploreItem>
                    <ExploreItem title='Events'><i className='fa-solid fa-calendar-day'></i></ExploreItem>
                    <ExploreItem title='Pages'><i className='fa-solid fa-flag'></i></ExploreItem>
                </ul>
            </div>
        </div>
    )
}