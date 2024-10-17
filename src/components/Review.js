import React from 'react'

const Review = ({ image, name, reviewText, stars }) => {
  // Create an array of star elements
  const renderStars = () => {
    const starsArray = []
    for (let i = 0; i < 5; i++) {
      starsArray.push(
        <span key={i} className={`star ${i < stars ? 'filled' : ''}`}>
          &#9733;
        </span>
      )
    }
    return starsArray
  }

  return (
    <div className="review-card">
      {/* Display stars */}
      <div className="stars">{renderStars()}</div>

      {/* Avatar image and name */}
      <div className="user-info">
        <img src={image} alt={name} className="avatar" />
        <h3>{name}</h3>
      </div>

      {/* Review text */}
      <p className="review-text">{reviewText}</p>
    </div>
  )
}

export default Review
