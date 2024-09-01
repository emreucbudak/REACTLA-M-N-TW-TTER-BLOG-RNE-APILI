import { useEffect, useState } from 'react'
import './App.css'
import CenterSide from './CenterSide'
import LeftSide from './LeftSide'
import MidSide from './MidSide'
import PostDetails from './PostDetails'
import axios from 'axios'



function App() {
  const [postDescription, setPostDescription] = useState([])
  const sendDetail = (title) => {
    const created = [
      ...postDescription, {
        title
      }
    ]
    setPostDescription(created)
    const pushdetails = axios.post('http://localhost:3000/posts',{
      title
    })
    console.log(pushdetails)
  }
  const fetchPost = async() => {
    const response = await axios.get('http://localhost:3000/posts')
    setPostDescription(response.data)

  }
  useEffect(() => {
    fetchPost();
  },[])
  return (
    <div className='body'>
      <LeftSide/>
      <MidSide/>
      <CenterSide postsend={sendDetail}/>
      <PostDetails details = {postDescription}/>
      

    </div>
  )
}

export default App
