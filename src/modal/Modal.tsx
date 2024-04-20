import { Divider } from 'antd'
import React from 'react'
import Bread from '../components/Bread'
import DraggableTree from '../components/DraggableTree'
// import content from '../data/content'

export default function Modal(props: {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}) {
  return (
    <div className='modal'>
      <h1 className='modal-title'>I am the modal</h1>
      <button onClick={() => props.setShowModal((prev) => !prev)}>
        Dismiss me
      </button>
      <Divider />
      {/* <div className='modal-content'>{content}</div> */}
      <div style={{ margin: '2rem' }}>
        <Bread />
      </div>
      <Divider />
      <DraggableTree />
    </div>
  )
}
