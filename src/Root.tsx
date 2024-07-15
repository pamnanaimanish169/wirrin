import React, { useEffect } from 'react'
import './Root.css'
import { useNavigate } from 'react-router-dom';
import { nanoid } from 'nanoid';

const Root = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const url = nanoid();
    console.log(url, 'url')
    navigate(`/${url}`)
  }, [])

  return (
    <></>
  )
}

export default Root