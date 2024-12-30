import { useState } from 'react'
import MenuBar from './components/MenuBar'
import StandardToolbar from './components/StandardToolbar'
import MainToolbar from './components/MainToolbar'
import Dashboard from './components/views/Dashboard'
import Test from './components/views/Test'
import Convert from './components/views/Convert'

type ViewType = 'dashboard' | 'test' | 'convert'

function App() {
  const [activeView, setActiveView] = useState<ViewType>('dashboard')

  const renderView = () => {
    switch (activeView) {
      case 'dashboard':
        return <Dashboard />
      case 'test':
        return <Test />
      case 'convert':
        return <Convert />
      default:
        return <Dashboard />
    }
  }

  return (
    <div className="flex flex-col h-screen">
      <MenuBar />
      <StandardToolbar />
      <MainToolbar activeView={activeView} setActiveView={setActiveView} />
      <div className="flex-1 overflow-y-auto">
        {renderView()}
      </div>
      <div className="h-6 bg-gray-100 border-t px-2 text-sm flex items-center">
        Status: Ready
      </div>
    </div>
  )
}

export default App
