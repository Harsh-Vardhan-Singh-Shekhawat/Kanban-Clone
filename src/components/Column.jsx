// import React from "react";
// import styled from "styled-components";
// import Card from "./Card";
// import "./scroll.css";
// import { Droppable } from "react-beautiful-dnd";

// const Container = styled.div`
//   background-color: #f4f5f7;
//   border-radius: 2.5px;
//   width: 300px;
//   height: 475px;
//   overflow-y: scroll;
//   -ms-overflow-style: none;
//   scrollbar-width: none;
//   border: 1px solid gray;
// `;

// const Title = styled.h3`
//   padding: 8px;
//   background-color: pink;
//   text-align: center;
// `;


// export default function Column({ title, tasks, id }) {
//   return (
//     <Container className="column">
//       <h1>
//         {title}
//       </h1>
//       <Droppable droppableId={id}>
//         {(provided, snapshot) => (
//           <div 
//             className="p-[3px] bg-[#f4f5f7]"
//             ref={provided.innerRef}
//             {...provided.droppableProps}
//             isDraggingOver={snapshot.isDraggingOver}
//           >
//             {tasks.map((task, index) => (
//               <Card key={index} index={index} task={task} />
//             ))}
//             {provided.placeholder}
//           </div>
//         )}
//       </Droppable>
//     </Container>
//   );
// }