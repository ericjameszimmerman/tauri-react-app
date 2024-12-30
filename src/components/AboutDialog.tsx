import { useEffect, useRef } from 'react'

interface AboutDialogProps {
  onClose: () => void
}

function AboutDialog({ onClose }: AboutDialogProps) {
  const dialogRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dialogRef.current && !dialogRef.current.contains(event.target as Node)) {
        onClose()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [onClose])

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div 
        ref={dialogRef}
        className="bg-white rounded-lg shadow-xl p-6 w-96"
      >
        <h2 className="text-2xl font-bold mb-4">About System Monitor</h2>
        <div className="mb-4">
          <p className="mb-2">Version 1.0.0</p>
          <p className="text-gray-600">
            A system monitoring application built with Tauri, React, and TypeScript.
          </p>
        </div>
        <div className="text-sm text-gray-500 mb-4">
          © 2024 Your Company Name
        </div>
        <button
          onClick={onClose}
          className="w-full bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700"
        >
          Close
        </button>
      </div>
    </div>
  )
}

export default AboutDialog 