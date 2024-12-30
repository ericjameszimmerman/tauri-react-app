import { useState, useEffect, useCallback } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { format, fromUnixTime } from 'date-fns'

interface MonitorData {
  timestamp: number
  cpu: number
  memory: number
  network: number
  disk: number
}

function Dashboard() {
  const [monitorData, setMonitorData] = useState<MonitorData[]>([])
  
  const generateRandomValue = (min: number, max: number) => 
    Math.floor(Math.random() * (max - min + 1)) + min

  const updateData = useCallback(() => {
    const newData: MonitorData = {
      timestamp: Math.floor(Date.now() / 1000), // Convert to Unix timestamp (seconds)
      cpu: generateRandomValue(20, 80),
      memory: generateRandomValue(30, 90),
      network: generateRandomValue(10, 60),
      disk: generateRandomValue(40, 70)
    }

    setMonitorData(prevData => {
      const newDataArray = [...prevData, newData]
      // Keep only last 30 seconds of data
      const thirtySecondsAgo = Math.floor(Date.now() / 1000) - 30
      return newDataArray.filter(d => d.timestamp > thirtySecondsAgo)
    })
  }, [])

  useEffect(() => {
    const interval = setInterval(updateData, 1000)
    return () => clearInterval(interval)
  }, [updateData])

  const formatXAxis = (unixTimestamp: number) => {
    try {
      return format(fromUnixTime(unixTimestamp), 'HH:mm:ss')
    } catch (error) {
      return ''
    }
  }

  const formatTooltipLabel = (unixTimestamp: number) => {
    try {
      return format(fromUnixTime(unixTimestamp), 'HH:mm:ss')
    } catch (error) {
      return ''
    }
  }

  const monitors = [
    { id: 'cpu', label: 'CPU Usage', value: monitorData[monitorData.length - 1]?.cpu ?? 0, color: 'text-blue-600' },
    { id: 'memory', label: 'Memory Usage', value: monitorData[monitorData.length - 1]?.memory ?? 0, color: 'text-green-600' },
    { id: 'network', label: 'Network Usage', value: monitorData[monitorData.length - 1]?.network ?? 0, color: 'text-purple-600' },
    { id: 'disk', label: 'Disk Usage', value: monitorData[monitorData.length - 1]?.disk ?? 0, color: 'text-orange-600' }
  ]

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">System Monitor</h1>
      
      {/* Monitor Widgets */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {monitors.map(monitor => (
          <div 
            key={monitor.id}
            className="bg-white rounded-lg shadow p-4"
          >
            <div className="text-gray-500 text-sm mb-2">{monitor.label}</div>
            <div className={`text-2xl font-bold ${monitor.color}`}>
              {monitor.value}%
            </div>
          </div>
        ))}
      </div>

      {/* Chart */}
      <div className="bg-white rounded-lg shadow p-4" style={{ height: '400px' }}>
        <h2 className="text-lg font-semibold mb-4">System Metrics - Last 30 Seconds</h2>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={monitorData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="timestamp" 
              tickFormatter={formatXAxis}
              type="number"
              domain={['dataMin', 'dataMax']}
              scale="time"
            />
            <YAxis domain={[0, 100]} />
            <Tooltip 
              labelFormatter={formatTooltipLabel}
              formatter={(value: number) => [`${value}%`]}
            />
            <Line 
              type="monotone" 
              dataKey="cpu" 
              stroke="#2563eb" 
              dot={false} 
              isAnimationActive={false}
            />
            <Line 
              type="monotone" 
              dataKey="memory" 
              stroke="#16a34a" 
              dot={false} 
              isAnimationActive={false}
            />
            <Line 
              type="monotone" 
              dataKey="network" 
              stroke="#9333ea" 
              dot={false} 
              isAnimationActive={false}
            />
            <Line 
              type="monotone" 
              dataKey="disk" 
              stroke="#ea580c" 
              dot={false} 
              isAnimationActive={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default Dashboard 