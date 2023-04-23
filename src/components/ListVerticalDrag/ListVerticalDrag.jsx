import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import useHookLocation from "../../Contex/hook";
import { IconButton } from "@material-tailwind/react";

const getList = (lst) => {
    lst.map((item, idx) => (
        {
            id: idx, content: item
        }
    )
    )
}

export function ListVerticalDrag() {
    const { listLocations } = useHookLocation()
    // const [items, setItems] = useState([]);
    // console.log(listLocations);

    function onDragEnd(result) {
        if (!result.destination) return;

        const newItems = Array.from(items);
        const [reorderedItem] = newItems.splice(result.source.index, 1);
        newItems.splice(result.destination.index, 0, reorderedItem);

        setItems(newItems);
    }

    return (
        <div className="overflow-x-hidden">
            <DragDropContext onDragEnd={onDragEnd} >
                <Droppable droppableId="vertical-list">
                    {(provided, snapshot) => (
                        <ul
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            className="divide-y divide-gray-200"
                        >
                            {Object.keys(listLocations).map((key) => (
                                <div>
                                    <h2 className="text-xl font-bold mb-4">{`Key: ${key}`}</h2>
                                    {listLocations[key].map((location, index) =>
                                        <Draggable key={location.id} draggableId={location.description} index={index}>
                                            {(provided, snapshot) => (
                                                <div className="flex ">
                                                    <li
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                        className={`p-4 ${snapshot.isDragging && "bg-gray-100"
                                                            }`}
                                                    >
                                                        {location.description}
                                                    </li>
                                                </div>
                                            )}
                                        </Draggable>
                                    )
                                    }
                                </div>
                            )
                            )
                            }
                            {/* {listLocations.map((item, index) => (
                                <Draggable key={item.id} draggableId={item.description} index={index}>
                                    {(provided, snapshot) => (
                                        <div className="flex ">
                                            <li
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                className={`p-4 ${snapshot.isDragging && "bg-gray-100"
                                                    }`}
                                            >
                                                {item.description}
                                            </li>
                                        </div>
                                    )}
                                </Draggable>
                            ))} */}
                            {provided.placeholder}
                        </ul>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
    );
}


