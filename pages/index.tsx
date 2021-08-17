import type { NextPage } from 'next'
import { CHARACTERS } from './caractersData'
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const Home: NextPage = () => {
  return (
    <div>
      <h1>react-beautiful-dnd-sample</h1>
      <DragDropContext>
        <Droppable droppableId="characters">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {CHARACTERS.map(({ id, name }, index) => {
                return (
                  <Draggable key={id} draggableId={id} index={index}>
                    {(provided) => (
                      <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                        <p>{name}</p>
                      </li>
                    )}
                  </Draggable>
                );
              })}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}

export default Home
