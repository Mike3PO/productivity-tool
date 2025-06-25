export function ChecklistInput(props) {
    const { selectedTab, handleAddItem, checklistInput, setChecklistInput } = props
    return (
        <div className="input-container">
            <input value={checklistInput} onChange={(e) => {
                setChecklistInput(e.target.value)
            }}placeholder="Add item" />
            <button onClick={() => {
                if (!checklistInput) { return }
                handleAddItem(checklistInput, selectedTab)
                setChecklistInput('')
            }}>
            <i className="fa-solid fa-plus"></i>
            </button>
        </div>
    )
}