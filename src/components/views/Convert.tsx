import { useState, useEffect, useRef } from 'react'
import mermaid from 'mermaid'

function Convert() {
  const [code, setCode] = useState<string>(
    `graph TD
    A[Start] --> B{Is it?}
    B -- Yes --> C[OK]
    C --> D[Rethink]
    D --> B
    B -- No ----> E[End]`
  )
  const [error, setError] = useState<string>('')
  const mermaidRef = useRef<HTMLDivElement>(null)

  const renderDiagram = async () => {
    if (mermaidRef.current) {
      mermaidRef.current.innerHTML = ''
      try {
        const { svg } = await mermaid.render('mermaid-diagram', code)
        if (mermaidRef.current) {
          mermaidRef.current.innerHTML = svg
        }
        setError('')
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
      }
    }
  }

  useEffect(() => {
    mermaid.initialize({
      startOnLoad: true,
      theme: 'default',
      securityLevel: 'loose',
      flowchart: {
        useMaxWidth: true,
        htmlLabels: true,
        curve: 'basis'
      }
    })
    renderDiagram()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    renderDiagram()
  }, [code]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="h-full flex">
      {/* Left Panel - Editor */}
      <div className="w-1/2 flex flex-col p-4 border-r">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-semibold">Mermaid Editor</h2>
          <div className="space-x-2">
            <button 
              onClick={renderDiagram}
              className="text-sm bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
            >
              Refresh
            </button>
            <button 
              onClick={() => setCode('')}
              className="text-sm bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded"
            >
              Clear
            </button>
          </div>
        </div>
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="flex-1 w-full p-4 font-mono text-sm border rounded focus:outline-none focus:border-blue-500 resize-none overflow-auto min-h-0"
          placeholder="Enter Mermaid diagram code here..."
          spellCheck={false}
          wrap="off"
        />
      </div>

      {/* Right Panel - Preview */}
      <div className="w-1/2 flex flex-col p-4">
        <h2 className="text-lg font-semibold mb-2">Preview</h2>
        <div className="flex-1 border rounded p-4 bg-white overflow-auto min-h-0">
          {error ? (
            <div className="text-red-500 text-sm">{error}</div>
          ) : (
            <div className="h-full flex items-center justify-center" ref={mermaidRef} />
          )}
        </div>
      </div>
    </div>
  )
}

export default Convert 