import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/react'
import { useState } from 'react'
import { open } from '@tauri-apps/plugin-dialog'
import AboutDialog from './AboutDialog'

function MenuBar() {
  const [showAbout, setShowAbout] = useState(false)

  const handleFileOpen = async () => {
    try {
      const selected = await open({
        multiple: false,
        filters: [{
          name: 'Text Files',
          extensions: ['csv', 'txt']
        }]
      })
      
      if (selected) {
        console.log('Selected file:', selected)
      }
    } catch (error) {
      console.error('Error opening file:', error)
    }
  }

  return (
    <>
      <div className="flex bg-gray-100 border-b">
        <Menu as="div" className="relative">
          <MenuButton className="px-4 py-1 hover:bg-gray-200">File</MenuButton>
          <MenuItems className="absolute left-0 mt-1 w-56 bg-white shadow-lg border">
            <MenuItem>
              {({ active }: { active: boolean }) => (
                <button className={`${active ? 'bg-gray-100' : ''} w-full text-left px-4 py-2`}>
                  New
                </button>
              )}
            </MenuItem>
            <MenuItem>
              {({ active }: { active: boolean }) => (
                <button 
                  className={`${active ? 'bg-gray-100' : ''} w-full text-left px-4 py-2`}
                  onClick={handleFileOpen}
                >
                  Open...
                </button>
              )}
            </MenuItem>
            <MenuItem>
              {({ active }: { active: boolean }) => (
                <button className={`${active ? 'bg-gray-100' : ''} w-full text-left px-4 py-2`}>
                  Exit
                </button>
              )}
            </MenuItem>
          </MenuItems>
        </Menu>

        <Menu as="div" className="relative">
          <Menu.Button className="px-4 py-1 hover:bg-gray-200">Help</Menu.Button>
          <MenuItems className="absolute left-0 mt-1 w-56 bg-white shadow-lg border">
            <MenuItem>
              {({ active }: { active: boolean }) => (
                <button 
                  className={`${active ? 'bg-gray-100' : ''} w-full text-left px-4 py-2`}
                  onClick={() => setShowAbout(true)}
                >
                  About
                </button>
              )}
            </MenuItem>
          </MenuItems>
        </Menu>
      </div>

      {showAbout && <AboutDialog onClose={() => setShowAbout(false)} />}
    </>
  )
}

export default MenuBar 