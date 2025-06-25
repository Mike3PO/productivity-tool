export function Header(props) {
    const { items, selectedTab } = props
    const filterChecklist = selectedTab === 'Exercise' ?
        items.filter(val => val.category == 'Exercise') : 
        selectedTab === 'Meals' ?
            items.filter(val => val.category == 'Meals') : 
            selectedTab === 'Productivity' ? 
                items.filter(val => val.category == 'Productivity') : 
                selectedTab === 'Art' ? 
                    items.filter(val => val.category == 'Art') :
                    items.filter(val => val.category == 'Sleep')
    const numItemsinChecklist = filterChecklist.length
    const isPlural = numItemsinChecklist != 1 ? 's' : ''
    return (
        <header>
            <h1 className="text-gradient">You have {numItemsinChecklist} {selectedTab} item{isPlural} remaining.</h1>
        </header>
    )
}