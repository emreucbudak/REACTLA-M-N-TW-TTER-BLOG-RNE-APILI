import React, { useState } from 'react'
import TLogo from './assets/tlogo.jpg'
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import RecyclingIcon from '@mui/icons-material/Recycling';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import UploadIcon from '@mui/icons-material/Upload';

function ShowPost({ datam }) {
    const [retweetcount, setRetweetCount] = useState(0)
    console.log(retweetcount)
    return (
        <div>
            <div className='post  md:-ml-8  '>
                <div className='postdetails flex flex-col md:mt-2   md:ml-40 lg:ml-48 xl:ml-64 '>
                    <div className='postTop flex flex-row gap-x-3 '>
                        <img src={TLogo} alt="" className=' postlogo rounded-full md:w-12 md:h-12' />
                        <p><strong className=' text-slate-100 '>Emre Üçbudak</strong></p>
                        <p className=' text-zinc-500'>@emreucbudak</p>
                        <p className='text-zinc-500' >·</p>
                        <p className='text-zinc-500'>1d</p>
                    </div>
                    <div className='postdatadetails'>
                        <p className='text-slate-200 postData md:w-96 xl:w-full lg:w-full md:mt-1 md:ml-24 xl:ml-32 xl:-mt-4 lg:ml-24'>{datam}</p>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default ShowPost