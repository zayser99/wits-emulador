import { useState } from 'react'
import { tab } from 'src/types/front.types'

export interface TabsProps {
  tabs: tab[]
}

export default function Tabs({ tabs }: TabsProps): JSX.Element {
  const [activeTab, setActiveTab] = useState(tabs?.[0] ? tabs[0].id : '')
  return (
    <div className="fixed inset-0 bg-gray-100 box-border overflow-hidden p-2">
      {/* Header fijo */}
      <div className="w-full bg-indigo-800 flex rounded-xl border-b border-gray-300 shadow-lg mb-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 text-center py-3 text-sm font-semibold transition-all rounded-xl duration-150 border-b-2 ${
              activeTab === tab.id
                ? 'bg-indigo-400 text-gray-800 border-green-900'
                : 'bg-transparent text-white border-transparent hover:bg-indigo-500'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Contenedor principal con scroll interno */}
      <div className="w-full h-[calc(100%-55px)] bg-white rounded-xl shadow-lg shadow-indigo-900 overflow-hidden">
        <div className="h-full overflow-y-auto pr-6 pl-6 pt-2">
          {tabs.find((tab) => tab.id === activeTab)?.content}
        </div>
      </div>
    </div>
  )
}
