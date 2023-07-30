import React from "react";
import Header from "./Header";
import MobileApp from "./MobileApp";
import Filter from "./Filter";
import KanbanBoard from "./KanbanBoard";

const Task = () => {
  return (
    <>
      <Header />
      <div className="mx-10 ">
        <MobileApp />
        <Filter />
        <KanbanBoard />
      </div>
    </>
  );
};

export default Task;
