import React from 'react'
import Logo from './assets/twitter.svg'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailIcon from '@mui/icons-material/Mail';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import PersonIcon from '@mui/icons-material/Person';




function LeftSide() {
  return (
    <div>
        <div className='leftSideCol grid grid-rows-8 '>
            <div className='logo'>
                <img src={Logo} alt=""  className='logo mt-4 sm:w-96'/>
            </div>


        </div>
    </div>
  )
}

export default LeftSide