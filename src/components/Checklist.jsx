import { ChecklistItem } from "./ChecklistItem";

export function Checklist(props) {
    const { items, selectedTab } = props

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
                    <>
                    <ChecklistItem
                        key={itemIndex}
                        itemIndex={items.findIndex(val => val.input == item.input)}
                        {...props}
                        item={item} />
                    </>
                )
            })}

        </>
    )
}