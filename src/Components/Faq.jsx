import React, { useState } from 'react'
import QnA from './Qna';

const Faq = ({ data }) => {

    const [showIndex, setIndex] = useState(-1)

    const handleQnA = (index)=>{
        setIndex((previndex)=> {
            if (previndex===index){
                return -1
            }
            return index
        })
    }
    
  return (
    <div>
      <h2 className='heading'>FAQs</h2>
      {data.faqs.map((qna, index) => {
        return(
        <QnA key={index}
        qna={qna}
        showAns={index===showIndex}
        handleQnA={()=>
            handleQnA(index)
        }/> 
        
    )
})}
    </div>
  )
}

export default Faq
