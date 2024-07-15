import React, { useEffect, useState } from 'react'
import { Editor } from '@monaco-editor/react'
import { db } from '../../config/firebaseConfig';
import { get, onValue, ref, set } from 'firebase/database';
import { useParams } from 'react-router-dom';

const CodeEditor = () => {
  const { id } = useParams();
  const [code, setCode] = useState(null)
  const [loading, setLoading] = useState<boolean>(false)
  const dbRef = ref(db, `code/${id}`)

  console.log(id)

  useEffect(() => {
    fetchData();
  }, []);

  /**
   * @description Return the fetched data from firabase in object form
   * @returns void
   */
  const fetchData = async () => {
    console.log('fetchData');
    setLoading(true)

    try {
      const snapshot = await get(dbRef);

      if (snapshot.exists()) {
        const data = snapshot.val();
        console.log(data)
        setCode(data)
      } else {
        console.error('Data for the specified url does not exists');
      }
      setLoading(false)

    } catch (error) {
      console.error('Not able to fetch data from firebase', error);
      setLoading(false)
    }
  }

  /**
   * @description write to database & update the state locally
   * @param event 
   */
  const handleOnChange = async (event) => {
    console.log('handleOnChange', event)

    try {
      await set(dbRef, event.target.value)
    } catch (error) {
      console.error('Error in updating database:', error);

    }
  }


  return (
    <div>
      {loading ? <div>Loading ...</div> :
        <Editor
          height="100vh"
          defaultLanguage='javascript'
          defaultValue={code || '// some comment'}
          theme='vs-dark'
          onChange={() => handleOnChange(event)}
        />}
    </div>
  )
}

export default CodeEditor