// import { HomeOutlined,  UserOutlined } from '@ant-design/icons'
import { Breadcrumb } from 'antd'
import { useState } from 'react'

interface BreadItem {
  id: number
  name: string
}

// Arguments have ArgumentShape and ArgumentDataType
const breadItems: BreadItem[] = [
  { id: 1, name: 'Assumption Types' },
  { id: 2, name: 'Evaluators' },
  { id: 3, name: 'Arguments' },
  { id: 4, name: 'Qualifiers' },
]

export default function Bread() {
  const [selectedId, setSelectedId] = useState<number | null>(null)
  return (
    <Breadcrumb
      items={breadItems.map((item) => ({
        title: (
          <button
            key={item.id}
            style={{
              border: 'none',
              backgroundColor: 'transparent',
              cursor: 'pointer',
              color: selectedId === item.id ? 'black' : 'gray',
            }}
            // Toggle selectedId on click
            onClick={() =>
              setSelectedId(item.id === selectedId ? null : item.id)
            }
          >
            {item.name}
          </button>
        ),
      }))}
    />
  )
}
