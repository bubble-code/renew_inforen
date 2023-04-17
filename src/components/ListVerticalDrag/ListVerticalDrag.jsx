import { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'


export const ListVerticalDrag = () => {
    const [items, setItems] = useState([
        { id: "item-1", content: "Item 1" },
        { id: "item-2", content: "Item 2" },
        { id: "item-3", content: "Item 3" },
        { id: "item-4", content: "Item 4" },
    ]);

    function onDragEnd(result) {
        if (!result.destination) return;

        const newItems = Array.from(items);
        const [reorderedItem] = newItems.splice(result.source.index, 1);
        newItems.splice(result.destination.index, 0, reorderedItem);

        setItems(newItems);
    }
    return (
        <div class=" text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white overflow-hidden">
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="vertical-list">
                    {(provided, snapshot) => (
                        <ul
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            className="divide-y divide-gray-200"
                        >
                            {items.map((item, index) => (
                                <Draggable key={item.id} draggableId={item.id} index={index}>
                                    {(provided, snapshot) => (
                                        <li
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            className={`p-4 ${snapshot.isDragging && "bg-gray-100"
                                                }`}
                                        >
                                            {item.content}
                                        </li>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </ul>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
    )
}
