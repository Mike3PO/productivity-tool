export function ChecklistItem(props) {
    const { item, itemIndex, handleCompleteItem, handleDeleteItem } = props

    return (
        <div className="card todo-item">
            <div className="todo-buttons"><button onClick={() => {
                // Complete item
                handleCompleteItem(itemIndex)
            }}>
                <i class={"fa-regular fa-square" + (item.complete === true ? "-check" : "")}></i>
            </button>
            </div>
            <p>{item.input}</p>
            <div className="todo-buttons">
                <button onClick={() => {
                    handleDeleteItem(item)
                }}>
                    <i class="fa-solid fa-trash"></i>
                </button>
            </div>
        </div>
    )
}