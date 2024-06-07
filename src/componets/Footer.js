import React from 'react'

export default function Footer(props) {
  return (
    <div className='container mt-5' style={{color:props.mode==='dark'?'white':'black',textAlign: "center" }} >
      <p>Created By <span style={{color:'blue'}}>Disha Sangani</span>  !!</p>
    </div>
  )
}
