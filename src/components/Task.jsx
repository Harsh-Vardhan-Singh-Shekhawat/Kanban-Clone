import React from 'react'
import Profile from './Profile'
import MobileApp from './MobileApp'
import Filter from './Filter'
import ToDo from './ToDo';
import OnProgress from './OnProgress';
import Completed from './Completed';
const Task = () => {
  return (
    <div className=' h-[88px] mx-10 border-b-[1px]'>   
        <Profile /> 
        <MobileApp />
        <Filter />
        <div className='flex justify-between'>
          <ToDo />
          <OnProgress />
          <Completed />
        </div>
    </div>
  )
}

export default Task
