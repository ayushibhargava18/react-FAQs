import React from 'react'
import './Styles.css'
import Faq from './Components/Faq'
import data from './data/faqdata.json'


const App = () => {

  return (

    <Faq data={data}/>
    
  )
}

export default App
