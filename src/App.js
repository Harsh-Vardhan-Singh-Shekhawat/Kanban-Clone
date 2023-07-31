import React, { useState } from 'react'
import Sidebar from './components/Sidebar';
import Task from './components/Task';

function App() {

  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="App md:p-[0.5px] p-[1px]">
  
      <div className="flex bg-white md:m-10 m-2 lg:m-10 rounded-[16px] shadow-[#D8D8D8] shadow-2xl font-semibold">
         <div className=''>
            <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
         </div>
         <div className='w-full'>
            <Task isOpen={isOpen} setIsOpen={setIsOpen} />
         </div>
      </div>
     
    </div>
  );
}

export default App;
