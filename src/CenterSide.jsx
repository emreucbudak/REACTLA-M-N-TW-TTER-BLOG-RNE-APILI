import React, { useState } from 'react'
import TLogo from './assets/tlogo.jpg'

function CenterSide({postsend}) {
    const [inputval,setInputVal] = useState("")
    const changeInput = (e) => {
        setInputVal(e.target.value)
    }
    const submitClick = (e) => {
        e.preventDefault();
        postsend(inputval)
        setInputVal("")
    }
    return (
        <div className='centerside md:max-w-md 2xl:ml-2'>
            <div className='inputlabel md:w-full md:mr-8 xl:ml-96 xl:mt-8 md:mt-8 '>
                <form action="" className='form md:float-left '>
                <label htmlFor="twit" className='flex flex-col'>
                    <div className='flex flex-row centeranaside'>
                    <img src={TLogo} alt="" className='tlogo rounded-full md:w-10 md:h-10 postlogomsu' />
                    <textarea className='textarea md:w-full md:border-b-8 md:border-current' onChange={changeInput} value={inputval} maxLength="200" placeholder='Ne Paylaşmak İstersin ?'/>
                    </div>
                    <button className='bg-sky-400 sendButton mt-8 md:w-20 md:mt-2' onClick={submitClick}>Gönder</button>

                </label>
                </form>
            </div>
        </div>
    )
}

export default CenterSide