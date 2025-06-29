import { useState, useEffect } from 'react'

export function ChecklistItem(props) {
    const { item, itemIndex, handleResetCompleteItem, handleCompleteItem, handleEditItem, handleDeleteItem } = props

    const [ date, setDate ] = useState(new Date())
    const [ prevDate, setPrevDate ] = useState(new Date())

    useEffect(() => {
        let interval = setInterval(() => {
            const year = date.getFullYear()
            const month = date.getMonth()
            const day = date.getDate()
            const hour = date.getHours()
            const minute = date.getMinutes()
            const newDate = new Date(year, month, day, hour, minute)
            setPrevDate(date)
            setDate(newDate)

            if (prevDate.minute != date.minute) {
                handleResetCompleteItem(itemIndex)
            }
        }, 2000)

        return (() => {
            clearInterval(interval)
        })
    }, [])

    return (
        <div className="card todo-item">
            <h6>{date.toISOString()}</h6>
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