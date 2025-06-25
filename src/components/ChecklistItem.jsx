export function ChecklistItem(props) {
    const { item, itemIndex } = props

    return (
        <div className="card todo-item">
            <div className="todo-buttons"><button onClick={() => {
                // Complete item
            }}>
                <i class="fa-regular fa-square"></i>
            </button>
            </div>
            <p>{item.input}</p>
            <div className="todo-buttons">
                <button onClick={() => {
                    // Delete Item
                }}>
                    <i class="fa-solid fa-trash"></i>
                </button>
            </div>
        </div>
    )
}