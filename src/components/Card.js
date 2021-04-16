import React from 'react'

const Card = (props) => {
  console.log(props)
  return (
    <div>
        <div className='card'>
          <img src='...' className='card-img-top' alt='...' />
          <div className='card-body'>
            <h5 className='card-title'>{props.title}</h5>
            <p className='card-text'>
              {props.document}
            </p>
            <p className='card-text'>
              <small className='text-muted'>{props.cardDate.toString()}</small>
            </p>
          </div>
        </div>
      </div>
  )
}

export default Card
