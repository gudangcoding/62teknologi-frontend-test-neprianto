import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getBusinessDetails } from "../api";

const BusinessDetailPage = () => {
  const { id } = useParams();
  const [business, setBusiness] = useState(null);

  useEffect(() => {
    const fetchBusinessDetails = async () => {
      try {
        const response = await getBusinessDetails(id);
        setBusiness(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBusinessDetails();
  }, [id]);

  if (!business) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{business.name}</h1>
      <div>
        {business.photos.map((photo) => (
          <img key={photo} src={photo} alt={business.name} />
        ))}
      </div>
      <p>Rating: {business.rating}</p>
      <a
        href={`https://www.google.com/maps/search/?api=1&query=${business.coordinates.latitude},${business.coordinates.longitude}`}
      >
        See on Google Maps
      </a>
      <h2>Reviews</h2>
      <ul>
        {business.reviews.map((review) => (
          <li key={review.id}>
            <p>{review.user.name}</p>
            <p>{review.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BusinessDetailPage;
