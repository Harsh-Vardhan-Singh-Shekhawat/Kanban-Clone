import React from 'react'
import Profile from './Profile'
import MobileApp from './MobileApp'
import Filter from './Filter'

const Task = () => {
  return (
    <div className=' h-[88px] mx-10 border-b-[1px]'>   
        <Profile /> 
        <MobileApp />
        <Filter />
    </div>
  )
}

export default Task
