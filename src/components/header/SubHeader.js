
import React from 'react'
import './header.css'
const SubHeader = ({title,text,children})=>{
    return(
      <div className = 'headerBody'>
      <div>
        <div className="headerText">
          <h3>{title} </h3>
          <p> {text}</p>
          {children}
        </div>            
      </div>
    </div>
    )
  }
//All exiciting Recipies for you!
//Pick your Favourite One!
  export default SubHeader