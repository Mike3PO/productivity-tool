import { Checklist } from "./components/Checklist"
import { ChecklistInput } from "./components/ChecklistInput"
import { Header } from "./components/Header"
import { Tabs } from "./components/Tabs"

import { useState, useEffect } from 'react'

function App() {

  const [items, setItems] = useState([
    { input : 'Start building your checklist', category : 'Exercise', complete : false}
  ])

  const [checklistInput, setChecklistInput] = useState('')

  const [selectedTab, setSelectedTab] = useState('Exercise')

  function handleAddItem(newItem, section) {
    const newChecklist = [...items, { input: newItem, category : section, complete : false}]
    setItems(newChecklist)
    handleSaveData(newChecklist)
  }

  function handleCompleteItem(index) {
    let newChecklist = [...items]
    let completedItem = items[index]
    completedItem['complete'] = !completedItem['complete']
    newChecklist[index] = completedItem
    setItems(newChecklist)
    handleSaveData(newChecklist)
  }

  function handleResetCompleteItem(index) {
    let newChecklist = [...items]
    let completedItem = items[index]
    completedItem['complete'] = false
    newChecklist[index] = completedItem
    setItems(newChecklist)
    handleSaveData(newChecklist)
  }

  function handleEditItem(index) {
    const inputValue = items[index].input
    setChecklistInput(inputValue)
    handleDeleteItem(items[index])
  }

  function handleDeleteItem(item) {
    const newChecklist = items.filter(val => val.input != item.input)
    setItems(newChecklist)
    handleSaveData(newChecklist)
  }

  function handleSaveData(currItems) {
    if (!localStorage) { return }
    localStorage.setItem('productivity-tool', JSON.stringify({ items: currItems }))
  }

  useEffect(() => {
    if (!localStorage || !localStorage.getItem('productivity-tool'))
      { return }
    let db = JSON.parse(localStorage.getItem('productivity-tool'))
    setItems(db.items)
  }, [])

  return (
    <>
      <Header items={items} selectedTab={selectedTab}/>
      <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
      <Checklist handleResetCompleteItem={handleResetCompleteItem} handleEditItem={handleEditItem} handleCompleteItem={handleCompleteItem} handleDeleteItem={handleDeleteItem} selectedTab={selectedTab} items={items}/>
      <ChecklistInput selectedTab = {selectedTab} handleAddItem = {handleAddItem} checklistInput = {checklistInput} setChecklistInput = {setChecklistInput} />
    </>
  )
}

export default App
