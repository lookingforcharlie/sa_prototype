import { Divider } from 'antd'
import React from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Bread from '../components/Bread'
import DraggableTree from '../components/DraggableTree'

export default function BootStrapModal(props: {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
  showModal: boolean
}) {
  const handleOnClickOnButton = () => {
    props.setShowModal((prev) => !prev)
  }

  return (
    // <div className='overlay'>
    //   <div className='modal'>
    //     <h1 className='modal-title'>I am the modal</h1>
    //     <button onClick={handleOnClickOnButton}>Dismiss me</button>
    //     <Divider />

    //     <div style={{ margin: '2rem' }}>
    //       <Bread />
    //     </div>
    //     <Divider />

    //     <div className='modal-tree'>
    //       <DraggableTree />
    //       <DraggableTree />
    //       <DraggableTree />
    //     </div>
    //   </div>
    // </div>
    <div
      className='modal show'
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog className='modal'>
        <div className='modal_content'>
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>Modal body text goes here.</p>
          </Modal.Body>

          <Modal.Footer>
            <Button variant='secondary' onClick={handleOnClickOnButton}>
              Close
            </Button>
            <Button variant='primary'>Save changes</Button>
          </Modal.Footer>
        </div>
      </Modal.Dialog>
    </div>
  )
}
