import { ChecklistItem } from "./ChecklistItem";
import { useState, useEffect } from 'react'

export function Checklist(props) {
    const { items, selectedTab, length, setLength } = props

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

    const [ prevDate, setPrevDate ] = useState(new Date())
    const [ date, setDate ] = useState(new Date())

    useEffect(() => {
        const interval = setInterval(() => {
            const dateTimeLocalNow = new Date(
            new Date().getTime() - new Date().getTimezoneOffset() * 60000
            );
            setPrevDate(date)
            setDate(dateTimeLocalNow)
            setLength(filterChecklist.length)
        }, 2000)

        return () => clearInterval(interval)
    }, [])

    return (
        <>
            <p>{date.getMinutes()}</p>
            {filterChecklist.map((item, itemIndex) => {
                return (
                    <ChecklistItem
                        key={itemIndex}
                        itemIndex={items.findIndex(val => val.input == item.input)}
                        date={date}
                        prevDate={prevDate}
                        {...props}
                        item={item} />
                )
            })}

        </>
    )
}