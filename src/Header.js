import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import './Header.css';
import HeaderOption from './HeaderOption';

function Header() {
  return (
    <div className='header'>    
    <div className='header__left'>
        <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="" />
         <div className='header__search'>
            <SearchIcon />
            <input type="text" name="" id="" />
        </div>
    </div> 

    <div className='header__right'>
        <HeaderOption Icon={HomeIcon} title={'home'}/>
        <HeaderOption Icon={SupervisorAccountIcon} title={'My Network'}/>
        <HeaderOption Icon={BusinessCenterIcon} title={'Jobs'}/>
        <HeaderOption Icon={ChatIcon} title={'Messaging'}/>
        <HeaderOption Icon={NotificationsIcon} title={'Notifications'}/>
        <HeaderOption avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOGCTFeNLK8ZwHfAcOUDrAoXoKFn8xFqFNW6Tb1XtmseR6mZkDBDKWkcrt3W96cFfKUEk&usqp=CAU" title='me'/>
    </div>

    </div>
  )
}

export default Header