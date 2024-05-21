import React from "react";
import { Link } from "react-router-dom";

const BusinessList = ({ businesses }) => (
  <div>
    {businesses.map((business) => (
      <div key={business.id}>
        <Link to={`/business/${business.id}`}>
          <h2>{business.name}</h2>
        </Link>
        <p>{business.location.address1}</p>
        <p>Rating: {business.rating}</p>
        <p>Reviews: {business.review_count}</p>
      </div>
    ))}
  </div>
);

export default BusinessList;
