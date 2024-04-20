// import { HomeOutlined,  UserOutlined } from '@ant-design/icons'
import { Breadcrumb } from 'antd'

const menuItems = [
  {
    key: '1',
    label: (
      <a target='_blank' rel='noopener noreferrer' href='https://meetxb.com'>
        General
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a target='_blank' rel='noopener noreferrer' href='https://meetxb.com'>
        Layout
      </a>
    ),
  },
  {
    key: '3',
    label: (
      <a target='_blank' rel='noopener noreferrer' href='https://meetxb.com'>
        Navigation
      </a>
    ),
  },
]

export default function Bread() {
  return (
    <Breadcrumb
      items={[
        {
          title: 'Ant Design',
        },
        {
          title: (
            <button
              style={{
                border: 'none',
                backgroundColor: 'transparent',
                cursor: 'pointer',
              }}
            >
              Component
            </button>
          ),
        },
        {
          title: <a href=''>General</a>,
          menu: { items: menuItems },
        },
        {
          title: 'Button',
        },
      ]}
    />
  )
}
