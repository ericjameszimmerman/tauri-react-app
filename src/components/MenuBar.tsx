import { Menu } from '@headlessui/react'

function MenuBar() {
  return (
    <div className="flex bg-gray-100 border-b">
      <Menu as="div" className="relative">
        <Menu.Button className="px-4 py-1 hover:bg-gray-200">File</Menu.Button>
        <Menu.Items className="absolute left-0 mt-1 w-56 bg-white shadow-lg border">
          <Menu.Item>
            {({ active }: { active: boolean }) => (
              <button className={`${active ? 'bg-gray-100' : ''} w-full text-left px-4 py-2`}>
                New
              </button>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }: { active: boolean }) => (
              <button className={`${active ? 'bg-gray-100' : ''} w-full text-left px-4 py-2`}>
                Open...
              </button>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }: { active: boolean }) => (
              <button className={`${active ? 'bg-gray-100' : ''} w-full text-left px-4 py-2`}>
                Exit
              </button>
            )}
          </Menu.Item>
        </Menu.Items>
      </Menu>
    </div>
  )
}

export default MenuBar 