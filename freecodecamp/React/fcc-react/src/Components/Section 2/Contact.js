import React from 'react'

const Contact = (props) => {
  return (
    <div className="contact">
        <div className="contact--card">
            <img className="contact--cardImage" src={props.img} alt="" />
            <h1 className="contact--header">{props.name}</h1>
            <p>{props.phoneNumber}</p>
            <p>{props.email}</p>
        </div>
        
    </div>
  )
}

export default Contact

