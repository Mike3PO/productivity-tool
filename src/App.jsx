import { Header } from "./components/Header"
import { Tabs } from "./components/Tabs"

import { useState } from 'react'
function App() {

  const [selectedTab, setSelectedTab] = useState('All')

  return (
    <>
      <Header/>
      <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
    </>
  )
}

export default App
