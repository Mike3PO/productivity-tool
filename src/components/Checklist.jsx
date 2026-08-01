import { ChecklistItem } from "./ChecklistItem";
import { useState, useEffect } from "react"

export function Checklist(props) {
    const { items, handleResetCompleteItem, selectedTab } = props

    const [currentDate, setCurrentDate] = useState(() => new Date())
    const [ prevDate, setPrevDate ] = useState(() => new Date())

    useEffect(() => {
        const interval = setInterval(() => {
            setPrevDate(currentDate)
            setCurrentDate(new Date())
            
            if (prevDate.getDate() != currentDate.getDate()) {
                handleResetCompleteItem()
            }
        }, 60 * 60 * 1000)

        return (() => {
            clearInterval(interval)
        })
    }, [currentDate, prevDate])

    // 'Exercise', 'Meals', 'Productivity', 'Art', 'Sleep'
    const filterChecklist = selectedTab === 'Exercise' ?
        items.filter(val => val.category == 'Exercise') : 
        selectedTab === 'Meals' ?
            items.filter(val => val.category == 'Meals') : 
            selectedTab === 'Productivity' ? 
                items.filter(val => val.category == 'Productivity') : 
                selectedTab === 'Art' ? 
                    items.filter(val => val.category == 'Art') :
                    items.filter(val => val.category == 'Sleep')

    return (
        <>
            {filterChecklist.map((item, itemIndex) => {
                return (
                    <ChecklistItem
                        key={itemIndex}
                        itemIndex={items.findIndex(val => val.input == item.input)}
                        {...props}
                        item={item} />
                )
            })}

        </>
    )
}