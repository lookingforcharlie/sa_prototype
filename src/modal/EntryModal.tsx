import { useState } from 'react'
import Modal from './Modal'

export default function EntryModal() {
  const [showModal, setShowModal] = useState(false)
  return (
    <>
      <button onClick={() => setShowModal((prev) => !prev)}>
        {showModal === false ? 'Show Modal' : 'Dismiss Modal'}
      </button>
      {showModal && <Modal setShowModal={setShowModal} />}
    </>
  )
}
