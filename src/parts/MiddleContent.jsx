
import { useState, useEffect} from 'react';
import '../styles/MiddleContent.css'

//post component
function Post({pfp, username, content}){
    return(
        <div className='post'>
            <div className='mb-3 d-flex' style={{alignItems:'center'}}>
                <img className='rounded-circle' src={pfp} width='40px' height='40px'/>
                <h4 className='ms-3 blue'>{username}</h4>
            </div>
                <p>{content}</p>
        </div>
    )
}

// story component
function Story({role, pfp='/images/plain.jpg'}) {
    return(
    <div className="story">
        <img alt='profile picture' src={pfp} className='story-bg'/>
        <img alt='story thumbnail' src={pfp} className='rounded-circle story-pfp' height='40px' width='40px'/>
        {role==="user" && <button title='Add Post' className='btn btn-light add-post-btn'><i className="fa-solid fa-plus"></i></button>}
    </div>
    )
}

function scrollRight() {
    const scrollable = document.getElementById('scrollable')
    scrollable.scrollLeft+=150;
    scrollable.style.scrollBehavior='smooth';
}

function scrollLeft(){
    const scrollable = document.getElementById('scrollable');
    scrollable.scrollLeft -= 150;
    scrollable.style.scrollBehavior='smooth';
}

//Middle content component
export default function MiddleContent({users}) {

    const [showStory, setShowStory] = useState(false);
    const [postText, setPostText] = useState("");
    let postId = 111;
    const [posts,setPosts] = useState(
        [
            {
                id: 111,
                content: "Hello World. This is my first fake fb post. XD"
            }
        ]);

    useEffect(()=>
        {
            if(showStory){
                document.getElementById("stories").style.height='fit-content';
                document.getElementById("caret-down").style.transform='rotate(180deg)';
            }
            else{
                document.getElementById("stories").style.height='70px';
                document.getElementById("caret-down").style.transform='rotate(0deg)';

            }
        },[showStory])

    async function addPost(e){
        e.preventDefault();

        document.getElementById("loading").style.display='block'

        const temp = await  new Promise((resolve, reject)=>setTimeout(()=>{
            const newPost = {
                id: ++postId,
                content: postText
            }
    
            setPosts([...posts, newPost]);
            setPostText("");
            resolve(1);
        },2000))
        document.getElementById("loading").style.display='none'
        
    }

    return (
        <div style={{width:'100%', maxWidth:'90vw'}}>
            <div className='bg-light mb-5 stories' id='stories' style={{borderRadius:'20px'}}>
                <div style={{display:'flex', justifyContent:'space-between'}}>
                    <h2 className='story-head'>Stories</h2>
                    <button className='btn caret-down' id='caret-down' onClick={()=>setShowStory(!showStory)}><i className='fa-solid fa-caret-down'></i></button>
                </div>
                <div className='story-wrapper'>

                    <button className='btn btn-primary scroller only-desk' onClick={scrollLeft}>
                                <i className='fa-solid fa-arrow-left'></i>
                    </button>

                    <div className='scrollable-div-wrapper' id='scrollable'>


                        <div className='scrollable-div'>

                            {users.map( (user) => <Story key={user.id} role={user.role} pfp={user.pfpUrl}/>)}
                        </div>
                    </div>
                
                    <button onClick={scrollRight} className='btn btn-dark scroller only-desk'><i className='fa-solid fa-arrow-right'></i></button>
                </div>

            </div>

            <div className='container py-3 px-4 bg-light mb-5' style={{borderRadius:'20px'}}>
                <h3>Create Post</h3>
                <form onSubmit={e=>addPost(e)}>
                    <textarea value={postText} onChange={e=>setPostText(e.target.value)} className='post-textbox'></textarea><br/>
                    <button className='btn btn-primary mt-2'>Post</button>
                </form>
                
            </div>
            <div className='spinner-border mx-auto mb-3' id='loading' style={{display:'none'}}></div>

            {posts.map(  (post)=> {
                return <Post key={post.id} username='Myself' pfp={users[0].pfpUrl} content={post.content}/>
            })}    
        </div>
    )
}