import { Editor } from '@monaco-editor/react'

function App() {

  return (
    <>
      <div>
        <Editor
          height="100vh"
          defaultLanguage="javascript"
          defaultValue="// some comment"
          theme='vs-dark'
        />
      </div>
    </>
  )
}

export default App
