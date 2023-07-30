import React from 'react'
import Sidebar from './components/Sidebar';
import Task from './components/Task';

function App() {
  return (
    <div className="App">
  
      <div className="flex  w-[1440px] bg-white  m-10 rounded-[16px] shadow-[#D8D8D8] shadow-2xl font-semibold">
         <div className=''>
            <Sidebar />
         </div>
         <div className='w-full '>
            <Task />
         </div>
      </div>
     
    </div>
  );
}

export default App;
