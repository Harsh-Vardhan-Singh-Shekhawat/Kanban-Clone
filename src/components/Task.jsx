import React from "react";
import Header from "./Header";
import MobileApp from "./MobileApp";
import Filter from "./Filter";
import KanbanBoard from "./KanbanBoard";

const Task = ({isOpen,setIsOpen}) => {
  return (
    <>
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="md:mx-10 mx-4">
        <MobileApp />
        <Filter />
        <KanbanBoard />
      </div>
    </>
  );
};

export default Task;
