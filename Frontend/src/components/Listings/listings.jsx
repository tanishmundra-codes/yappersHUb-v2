import { useState, useEffect } from "react";

function Listings() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/listings")
      .then((res) => res.json())
      .then((data) => setListings(data));
  }, []);

  return (
    <div className="p-4">
      <h1>All Tools</h1>
      <ul>
        {listings.map((listing) => (
          <li key={listing._id}>
            <a
              href={`/listings/${listing._id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              {listing.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Listings;
