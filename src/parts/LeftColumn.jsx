

export default function LeftColumn({pfp}) {
    return (
        <div >
            <div className="d-flex">
                <img className='rounded-circle' src={pfp} height='30px' width='30px'/>
                <h5>My username</h5>
            </div>
        </div>
    )
}