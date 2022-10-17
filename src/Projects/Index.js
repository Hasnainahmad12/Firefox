import React from 'react'
import Bookmark from './Components/Bookmark'
import FireMain from './Components/FireMain'
import Items from './Components/Items'

const Index = () => {
  return (
    <div className='main__body'>
        <Bookmark />
        <FireMain />
        <Items />
    </div>
  )
}

export default Index