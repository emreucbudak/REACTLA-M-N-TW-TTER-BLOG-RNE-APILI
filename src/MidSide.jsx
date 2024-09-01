import React from 'react'

function MidSide() {
  return (
    <div className='midside grid grid-rows-3'>
        <div className='toptable  md:mr-20 '>
            <ul className='flex flex-row midlist  xl:mr-64'>
                <li className='text-slate-100 active xl:ml-60 md:ml-16 sm:ml-4'><strong><button>Sana Özel</button></strong></li>
                <li className='deactive text-zinc-400 ml-24 md:ml-16 sm:ml-4'><button>Takip Edilenler</button></li>
                <li className='deactive text-zinc-400 ml-24 md:ml-16 sm:ml-4'><button>Github</button></li>
                <li className='deactive text-zinc-400 ml-24 md:ml-16 sm:ml-4'><button>Instagram</button></li>
            </ul>
        </div>
    </div>
  )
}

export default MidSide