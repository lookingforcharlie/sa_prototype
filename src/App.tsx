import { Divider } from 'antd'
import BasicTree from './components/BasicTree'
import Bread from './components/Bread'
import DraggableTree from './components/DraggableTree'
import './index.css'
import EntryModal from './modal/EntryModal'

function App() {
  // console.log('first commit in branch_charlie')
  // console.log('second commit in branch_charlie')
  // console.log('third commit in branch_charlie')
  // console.log(
  //   'fourth commit in branch_charlie, add some for amend, change commit message'
  // )

  // console.log('add some sauce for the fourth commit')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target)

    // Adding a files property of type FileList to HTMLInputElement is commonly used when dealing with file input elements (<input type="file">) in TypeScript to access the files property,
    const target = e.target as HTMLInputElement & {
      files: FileList
    }
    console.log(target.files[0].size)
  }

  return (
    <>
      <h1>Prototyping Everything</h1>
      <Divider />
      <EntryModal />
      <Divider />
      <BasicTree />
      <Divider />

      <DraggableTree />

      <Divider />
      <input type='file' name='image' onChange={handleChange} />
    </>
  )
}

export default App
