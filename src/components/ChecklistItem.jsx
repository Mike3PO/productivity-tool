import { useEffect } from 'react'

export function ChecklistItem(props) {
    const { prevDate, date, item, itemIndex, handleCompleteItem, handleEditItem, handleDeleteItem } = props

    useEffect(() => {
        const interval = setInterval(() => {
            if (!date || !prevDate) { return }
            if (date.getMinutes() != prevDate.getMinutes()) {
                item.complete = false
            }
        }, 1000)

        return () => clearInterval(interval)
    }, [])

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