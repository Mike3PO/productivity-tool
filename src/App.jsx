import { Checklist } from "./components/Checklist"
import { ChecklistInput } from "./components/ChecklistInput"
import { Header } from "./components/Header"
import { Tabs } from "./components/Tabs"

import { useState } from 'react'
function App() {

  const [items, setItems] = useState([
    { input : 'Start building your checklist', category : 'Exercise', complete : false}
  ])

  const [checklistInput, setChecklistInput] = useState('')

  const [selectedTab, setSelectedTab] = useState('Exercise')

  function handleAddItem(newItem, section) {
    const newChecklist = [...items, { input: newItem, category : section, complete : false}]
    setItems(newChecklist)
  }

  function handleCompleteItem(index) {
    let newChecklist = [...items]
    let completedItem = items[index]
    completedItem['complete'] = !completedItem['complete']
    newChecklist[index] = completedItem
    setItems(newChecklist)
  }

  function handleDeleteItem(item) {
    const newChecklist = items.filter(val => val.input != item.input)
    setItems(newChecklist)
  }

  return (
    <>
      <Header items={items} selectedTab={selectedTab}/>
      <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
      <Checklist handleCompleteItem={handleCompleteItem} handleDeleteItem={handleDeleteItem} selectedTab={selectedTab} items={items}/>
      <ChecklistInput selectedTab = {selectedTab} handleAddItem = {handleAddItem} checklistInput = {checklistInput} setChecklistInput = {setChecklistInput} />
    </>
  )
}

export default App
