import { Tree } from 'antd'
import type { DataNode, TreeProps } from 'antd/es/tree'
import './App.css'

import './App.css'

const treeData: DataNode[] = [
  {
    title: 'parent 1',
    key: '0-0',
    children: [
      {
        title: 'parent 1-0',
        key: '0-0-0',
        disabled: false,
        children: [
          {
            title: 'leaf',
            key: '0-0-0-0',
            disableCheckbox: true,
          },
          {
            title: 'leaf',
            key: '0-0-0-1',
          },
        ],
      },
      {
        title: 'parent 1-1',
        key: '0-0-1',
        children: [
          {
            title: <span style={{ color: '#1677ff' }}>sss</span>,
            key: '0-0-1-0',
            children: [
              {
                title: 'stem',
                key: '0-0-0-0-0',
                disableCheckbox: true,
              },
            ],
          },
          {
            title: <span style={{ color: '#1677ff' }}>ddd</span>,
            key: '0-0-1-1',
          },
        ],
      },
    ],
  },
]
function App() {
  console.log('first commit in branch_charlie')
  console.log('second commit in branch_charlie')
  console.log('third commit in branch_charlie')

  const onSelect: TreeProps['onSelect'] = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info)
  }

  const onCheck: TreeProps['onCheck'] = (checkedKeys, info) => {
    console.log('onCheck', checkedKeys, info)
  }

  return (
    <>
      <Tree
        checkable
        defaultExpandedKeys={['0-0-0', '0-0-1']}
        defaultSelectedKeys={['0-0-0', '0-0-1']}
        defaultCheckedKeys={['0-0-0', '0-0-1']}
        onSelect={onSelect}
        onCheck={onCheck}
        treeData={treeData}
      />
      <button>Delete</button>
      <button>Modify</button>
    </>
  )
}

export default App
