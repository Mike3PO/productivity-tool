import { useEffect } from 'react'

export function ChecklistItem(props) {
    const { item, itemIndex, handleCompleteItem, handleEditItem, handleDeleteItem } = props

    return (
        <div className="card todo-item">
            <div className="todo-buttons"><button onClick={() => {
                // Complete item
                handleCompleteItem(itemIndex)
            }}>
                <i className={"fa-regular fa-square" + (item.complete === true ? "-check" : "")}></i>
            </button>
            </div>
            <p>{item.input}</p>
            <div className="todo-buttons">
                <button onClick={() => {
                    handleEditItem(itemIndex)
                }}>
                    <h6>Edit</h6>
                </button>
                <button onClick={() => {
                    handleDeleteItem(item)
                }}>
                    <i className="fa-solid fa-trash"></i>
                </button>
            </div>
        </div>
    )
}