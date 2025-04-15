
import { useState, useEffect, useMemo} from 'react';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import '../styles/MiddleContent.css'

//post component
function Post({pfp, username, content}){
    return(
        <div className='post'>
            <div className='mb-3 d-flex' style={{alignItems:'center'}}>
                <img className='rounded-circle' src={pfp} width='40px' height='40px'/>
                <h5 className='ms-3 blue'>{username}</h5>
            </div>
                <p>{content}</p>
            <div className='d-flex'><p>Likes: 1</p><p style={{marginLeft:'100px'}}>Comments: 0</p></div>
        </div>
    )
}

// story component
function Story({role, pfp='/images/plain.jpg'}) {
    return(
    <div className="story">
        <img alt='profile picture' src={pfp} className='story-bg'/>
        <img alt='story thumbnail' src={pfp} className='rounded-circle story-pfp' height='40px' width='40px'/>
        {role =="user" && <button title='Create Story' className='add-post-btn'><i className="fa-solid fa-plus"></i></button>}
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
// variables
    const [showStory, setShowStory] = useState(true);
    const [postText, setPostText] = useState("");
    const [status, setStatus] = useState('idle');
    const [sortBy, setSortBy] = useState("recent");
    let postId = 112;
    const [posts,setPosts] = useState(
        [
            {
                id: 111,
                content: "Hello World. This is my first fake fb post. XD"
            },
            {
                id: 112,
                content: "This is my second post!!!"
            }
        ]);

    const recentOrder = useMemo(()=> posts.slice().reverse(), [posts])

    console.log(posts);
    console.log(recentOrder);
    
    
    useEffect(()=>
        {
            if(showStory){
                document.getElementById("stories").style.height='fit-content';
                document.getElementById("caret-down").style.transform='rotate(180deg)';
            }
            else{
                document.getElementById("stories").style.height='50px';
                document.getElementById("caret-down").style.transform='rotate(0deg)';

            }
        },[showStory])

    async function addPost(e){
        e.preventDefault();

        setStatus("loading")
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
        setStatus("idle");
    }

    return (
        <div style={{minWidth:'300px',maxWidth:'90vw',width:'100%', margin:'0 auto'}}>
            {/* stories start */}
            <div className='bg-light mb-3 stories' id='stories' style={{borderRadius:'20px'}}>
                <div style={{display:'flex', justifyContent:'space-between'}}>
                    <h4 className='story-head'>Stories</h4>
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
            {/* stories end */}

            <div className='py-3 px-4 bg-light mb-3' style={{borderRadius:'20px', width:'100%'}}>
                <h5>Create Post</h5>
                <form onSubmit={e=>addPost(e)}>
                    <textarea placeholder="What's on your mind?" value={postText} onChange={e=>setPostText(e.target.value)} className='post-textbox' disabled={status=="loading"}></textarea><br/>
                    <button className='btn btn-primary mt-2'>Post</button>
                </form>
                
            </div>
            <div className='spinner-border mx-auto mb-3' id='loading' style={{display:'none'}}></div>

            {/* filter */}
            {/* <div className='d-flex' style={{alignItems:'center', verticalAlign:'middle'}}>
                <p className='me-3 d-inline'>Sort by: </p>
                <select value={sortBy} onChange={(e)=>setSortBy(e.target.value)} style={{padding:'0px',marginBottom:'10px'}}>
                    <option value="recent">recent</option>
                    <option value="normal">time created</option>
                </select>
            </div> */}
            
            
            {/* Posts start here */}

            {/* {sortBy=="recent" ? reverseOrder.map(  (post)=> {
                return <Post key={post.id} username='Myself' pfp={users[0].pfpUrl} content={post.content}/>
            }) :
            posts.map(  (post)=> {
                return <Post key={post.id} username='Myself' pfp={users[0].pfpUrl} content={post.content}/>
            })
        }     */}

    <div className='py-3 px-4 bg-light mb-5' style={{borderRadius:'20px', width:'100%'}}>
        <Tabs
          defaultActiveKey="Recent"
          id="uncontrolled-tab-example"
          className="mb-3 dark"
        >
          <Tab eventKey="Recent" title="Recent">
            {recentOrder.map(  (post)=> {
                    return <Post key={post.id} username='Myself' pfp={users[0].pfpUrl} content={post.content}/>
            })}
          </Tab>
          <Tab eventKey="TimeCreated" title="From Oldest">
            {posts.map(  (post)=> {
                    return <Post key={post.id} username='Myself' pfp={users[0].pfpUrl} content={post.content}/>
            })}
          </Tab>
        
        </Tabs>
    </div>

        </div>
    )
}