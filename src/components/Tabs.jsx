export function Tabs(props) {
    const { selectedTab, setSelectedTab } = props
    const tabs = ['Exercise', 'Meals', 'Productivity', 'Art', 'Sleep']
    return (
        <nav>

            {tabs.map((tab, tabIndex) => {
                return (
                    <button onClick={() => {
                        setSelectedTab(tab)
                    }}key={tabIndex} className={"tab-button " + (tab === selectedTab ? ' tab-selected' : ' ')}>
                        <h4>{tab}</h4>
                    </button>
                )
            })}
            <hr></hr>
        </nav>
    )
}