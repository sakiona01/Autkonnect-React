import { Link } from "react-router-dom"

function BusinessCard({ business }) {

  return(
    <div className="business-card">
      <div className="rest-card-header">
        <h3>{business.name} {"★".repeat(Math.round(parseFloat(business.avg_rating))) + "☆".repeat(5 - Math.round(parseFloat(business.avg_rating)))}</h3>
        <Link to={`/details/${business.id}`}><button className="business-details-btn">Business Details</button></ Link>
        </div>
        <img className="business-img" src={business.image} alt="business"/>
    </div>
  )
}

export default BusinessCard