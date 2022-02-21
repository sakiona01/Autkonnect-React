//import HotDogs from "./HotDogs"
import { useState, useEffect } from "react"
import { useParams } from "react-router"

function BusinessDetails({ currentUser }) {
  const [business, setBusiness] = useState([])
  const [commentsArr, setCommentsArr] = useState([])
  const [businessTypeArr, setBusinessTypeArr] = useState([])
  const [ratings, setRatings] = useState([])
  const { id } = useParams()

  useEffect(() => {
    fetch(`/business/${id}`)
    .then(res => res.json())
    .then(rest => {
      setBusiness(rest)
      setCommentsArr(rest.comments)
      setBusinessTypeArr(rest.hot_dogs)
    })
  }, [id])

  const handleAddComment = (newComment) => {
    setCommentsArr([...commentsArr, newComment])
  }

  const handleCommentSubmit = (e) => {
    e.preventDefault()
    fetch('/comments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        comment: e.target.comment.value,
        business_id: business.id,
        user_id: currentUser.id
      })
    })
    .then(res => res.json())
    .then(handleAddComment)
    e.target.reset()
  }

 
  const handleAddRating = (newRating) => {
    setRatings([newRating])
  }

  const handleRating = (e) => {
    e.preventDefault()
    fetch('/reviews', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        rating: e.target.value,
        business_id: business.id,
        user_id: currentUser.id
      })
    })
    .then(res => res.json())
    .then(handleAddRating)
  }

  function eachBusinessType() {
    return businessTypeArr.map(business =>
      <BusinessType
        business={business}
        key={business.id}
      />
      )
  }


  return (
    <div>
    <div className="busi-details">
      <div className="busi-details-left">
        <h1 className="busi-details-header">{business.name} {"★".repeat(Math.round(parseFloat(business.avg_rating))) + "☆".repeat(5 - Math.round(parseFloat(business.avg_rating)))}</h1>
        <p className="busi-details-header">{business.address}</p>
        <img className="busi-details-img" src={business.image} alt="business"/>

        <div className="busi-details-btns">
          <button className="busi-details-btn" onClick={() => window.open(business.url, '_blank')}>Order Online</button>
          <br /><br />
          <button className="busi-details-btn" onClick={handleFavorite}>{favClicked ? "Added!" : "Add to Favorites"}</button>
        </div>

      <div className="details-rating-bar">
        <label className="details-rating-label">Rate Business: </label>
        <select className="details-rating-select" onChange={handleRating}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>

     <form className="comment-form" onSubmit={handleCommentSubmit}>
        <input className="comment-input" type="text" name="comment"/>
        <button className="comment-btn">Add Comment</button>
      </form>
      <div className="comments">
        <p><b>Comments: </b></p>
        {commentsArr.map(com => {
          return <p key={com.id}>{com.comment}</p>})}
      </div>
      </div>

      <div className="rest-details-right">
        <h2 className="rest-details-header">Menu Highlights:</h2>
        {eachBusinessType()}
      </div>
      </div>
    </div>
  )
}

export default BusinessDetails