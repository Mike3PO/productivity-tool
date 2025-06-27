export function Header(props) {
    const { items, selectedTab } = props
    const filterChecklist = selectedTab === 'Exercise' ?
        items.filter(val => val.category == 'Exercise' && val.complete == false) : 
        selectedTab === 'Meals' ?
            items.filter(val => val.category == 'Meals' && val.complete == false) : 
            selectedTab === 'Productivity' ? 
                items.filter(val => val.category == 'Productivity' && val.complete == false) : 
                selectedTab === 'Art' ? 
                    items.filter(val => val.category == 'Art' && val.complete == false) :
                    items.filter(val => val.category == 'Sleep' && val.complete == false)
    const numItemsInCategory = filterChecklist.length
    const isPlural = numItemsInCategory != 1 ? 's' : ''
    return (
        <header>
            <h1 className="text-gradient">You have {numItemsInCategory} {selectedTab} item{isPlural} remaining.</h1>
        </header>
    )
}