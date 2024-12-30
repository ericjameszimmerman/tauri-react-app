type ViewType = 'dashboard' | 'test' | 'convert'

interface MainToolbarProps {
  activeView: ViewType
  setActiveView: (view: ViewType) => void
}

interface View {
  id: ViewType
  label: string
  icon: string
}

function MainToolbar({ activeView, setActiveView }: MainToolbarProps) {
  const views: View[] = [
    { id: 'dashboard', label: 'Dashboard', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
    { id: 'test', label: 'Test', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2' },
    { id: 'convert', label: 'Convert', icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15' }
  ]

  return (
    <div className="flex items-center h-16 bg-gray-100 border-b px-2 space-x-2">
      {views.map((view) => (
        <button
          key={view.id}
          onClick={() => setActiveView(view.id)}
          className={`flex flex-col items-center p-2 rounded ${
            activeView === view.id ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-200'
          }`}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={view.icon} />
          </svg>
          <span className="text-sm mt-1">{view.label}</span>
        </button>
      ))}
    </div>
  )
}

export default MainToolbar 