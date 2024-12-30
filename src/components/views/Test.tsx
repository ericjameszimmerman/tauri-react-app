function Test() {
  return (
    <div className="p-6 space-y-8">
      <h1 className="text-2xl font-bold mb-6">Component Showcase</h1>

      {/* Buttons Section */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Buttons</h2>
        <div className="flex flex-wrap gap-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Primary
          </button>
          <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
            Secondary
          </button>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
            Rounded
          </button>
          <button className="border border-blue-500 text-blue-500 hover:bg-blue-100 font-bold py-2 px-4 rounded">
            Outline
          </button>
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" disabled>
            Disabled
          </button>
        </div>
      </section>

      {/* Input Fields */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Inputs</h2>
        <div className="space-y-4 max-w-md">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Text Input
            </label>
            <input 
              type="text" 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter text..."
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Search Input
            </label>
            <div className="relative">
              <input 
                type="search" 
                className="shadow appearance-none border rounded w-full py-2 pl-10 pr-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Search..."
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Progress Bars */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Progress Bars</h2>
        <div className="space-y-4 max-w-md">
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '45%' }}></div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div className="bg-green-600 h-4 rounded-full" style={{ width: '75%' }}></div>
          </div>
        </div>
      </section>

      {/* Dropdowns */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Dropdown</h2>
        <select className="block appearance-none w-full max-w-xs bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-gray-500">
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
      </section>

      {/* Toggle Switches */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Toggle Switches</h2>
        <label className="inline-flex relative items-center cursor-pointer">
          <input type="checkbox" className="sr-only peer" />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
        </label>
      </section>

      {/* Badges */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Badges</h2>
        <div className="flex flex-wrap gap-2">
          <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Default</span>
          <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Rounded</span>
          <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded">Error</span>
          <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Success</span>
        </div>
      </section>

      {/* Cards */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="font-bold text-xl mb-2">Card Title</h3>
            <p className="text-gray-700">This is a basic card with some sample content.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="font-bold text-xl mb-2">Interactive Card</h3>
            <p className="text-gray-700 mb-4">This card has a button.</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Action
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Test 