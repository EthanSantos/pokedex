import React from 'react'
import "./Pagination.css"

const Pagination = ({goToNextPage, goToPrevPage}) => {
  return (
    <div className = "button-container">
      {goToPrevPage && <button onClick = {goToPrevPage}>Previous</button>}
      {goToNextPage && <button onClick = {goToNextPage}>Next</button>}
    </div>
  )
}

export default Pagination
