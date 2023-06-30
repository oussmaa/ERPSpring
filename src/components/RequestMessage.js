import React from 'react'

const RequestMessage = ({ message, success }) => {
  return (
    <div className= {`req-message ${success}`}>
        {message}
    </div>
  )
}

export default RequestMessage
