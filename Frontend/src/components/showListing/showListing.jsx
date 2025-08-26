import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate  } from "react-router-dom";

function ShowListing() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [listing, setListing] = useState(null);

  useEffect(() => {
  fetch(`http://localhost:3000/api/listings/${id}`)
    .then((res) => res.json())
    .then((data) => {
      setListing(data);
    })
    .catch((err) => {
      console.log("Cannot fetch listing data ", err);
    });
}, [id]);

  const handleDelete =  async () => {
    await fetch(`http://localhost:3000/api/listings/${id}`, {
      method : "DELETE"
    });
    navigate("/");
  }

  if (!listing) return <p>Loading...</p>; // prevent crash

  return (
    <div>
      <h2>{listing.title}</h2>
      <p>{listing.description}</p>
      <p>Price: {listing.price}</p>
      <img src={listing.image} alt="Image" />
      <a href= {`/listings/${id}/edit`}>
        <button>Edit</button>
      </a>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default ShowListing;
