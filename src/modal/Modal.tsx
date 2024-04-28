import React from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

export default function BootStrapModal(props: {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
  showModal: boolean
}) {
  const handleOnClickOnButton = () => {
    props.setShowModal((prev) => !prev)
    console.log('i am bino ')
  }

  return (
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
