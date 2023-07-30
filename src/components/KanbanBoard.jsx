import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { v4 as uuid } from "uuid";
import Card1 from "./Cards/Card1";
import Card2 from "./Cards/Card2";
import Card3 from "./Cards/Card3";
import Card4 from "./Cards/Card4";
import Card5 from "./Cards/Card5";
import Card6 from "./Cards/Card6";
import Card7 from "./Cards/Card7";
import Card8 from "./Cards/Card8";
import Card9 from "./Cards/Card9";
import ToDoHead from "./ToDoHead";
import OnProgressHead from "./OnProgressHead";
import DoneHead from "./DoneHead";

const toDoItems = [
  { id: uuid(), content: <Card1></Card1> },
  { id: uuid(), content: <Card2></Card2> },
  { id: uuid(), content: <Card3></Card3> },
  { id: uuid(), content: <Card4></Card4> },
];

const onProgressItems = [
  { id: uuid(), content: <Card5></Card5> },
  { id: uuid(), content: <Card6></Card6> },
  { id: uuid(), content: <Card9></Card9> },
];

const doneItems = [
  { id: uuid(), content: <Card7></Card7> },
  { id: uuid(), content: <Card8></Card8> },
];

const columnsFromBackend = {
  [uuid()]: {
    name: <ToDoHead cardsLength={toDoItems.length} />,
    items: toDoItems,
  },
  [uuid()]: {
    name: <OnProgressHead cardsLength={onProgressItems.length} />,
    items: onProgressItems,
  },
  [uuid()]: {
    name: <DoneHead cardsLength={doneItems.length} />,
    items: doneItems,
  },
};

const onDragEnd = (result, columns, setColumns) => {
  if (!result.destination) return;
  const { source, destination } = result;

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems,
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems,
      },
    });
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems,
      },
    });
  }
};

function KanbanBoard() {
  const [columns, setColumns] = useState(columnsFromBackend);

  console.log(toDoItems.length);
  return (
    <div className="flex justify-between gap-[16px] my-10 w-full">
      <DragDropContext
        className=" bg-[#F5F5F5]"
        onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
      >
        {Object.entries(columns).map(([columnId, column], index) => {
          return (
            <div className="w-full" key={columnId}>
              <h2>{column.name}</h2>
              <div className="min-h-full">
                <Droppable className="" droppableId={columnId} key={columnId}>
                  {(provided, snapshot) => {
                    return (
                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        className="min-h-full p-[20px] grid gap-4 bg-[#F5F5F5] rounded-b-[16px]"
                      >
                        {column.items.map((item, index) => {
                          return (
                            <Draggable
                              key={item.id}
                              draggableId={item.id}
                              index={index}
                            >
                              {(provided, snapshot) => {
                                return (
                                  <div
                                    className="p-[16px] bg-white rounded-[16px] mt-[10px] "
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    style={{
                                      ...provided.draggableProps.style,
                                    }}
                                  >
                                    {item.content}
                                  </div>
                                );
                              }}
                            </Draggable>
                          );
                        })}
                        {provided.placeholder}
                      </div>
                    );
                  }}
                </Droppable>
              </div>
            </div>
          );
        })}
      </DragDropContext>
    </div>
  );
}

export default KanbanBoard;
