import React from 'react'
import ShowPost from './ShowPost'

function PostDetails({ details }) {    
    return (
        <div className='postbackdetails '>
        {
            details.map((data,index) => {
                return <ShowPost key={index} datam={data.title}/>
            })
        }
        </div>
    )
}

export default PostDetails