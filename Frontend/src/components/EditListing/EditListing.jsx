import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditListing() {
  const { id } = useParams();
  const navigate = useNavigate();

  // initialize with empty strings to avoid uncontrolled → controlled warning
  const [listing, setListing] = useState({
    title: "",
    description: "",
    link: "",
    owner: "",
    image: "",
  });

  // fetch existing listing
  useEffect(() => {
    fetch(`http://localhost:3000/api/listings/${id}`)
      .then((res) => res.json())
      .then((data) => setListing(data))
      .catch((err) => {
        console.log("Failed to fetch the data for editing the listing", err);
      });
  }, [id]);

  // handle input change
  const handleChange = (e) => {
    setListing({ ...listing, [e.target.name]: e.target.value });
  };

  // handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/listings/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(listing),
      });

      if (res.ok) {
        console.log("Listing updated");
        navigate(`/listings/${id}`);
      } else {
        console.log("Failed to update listing");
      }
    } catch (err) {

      console.error("Error updating:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      Title :
      <input
        name="title"
        placeholder="title"
        value={listing.title}
        onChange={handleChange}
      />
      <br /> <br />
      Description :
      <textarea
        name="description"
        placeholder="description"
        value={listing.description}
        onChange={handleChange}
      />
      <br /> <br />
      Link :
      <input
        name="link"
        placeholder="link"
        value={listing.link}
        onChange={handleChange}
      />
      <br /> <br />
      Owner :
      <input
        name="owner"
        placeholder="owner"
        value={listing.owner}
        onChange={handleChange}
      />
      <br /> <br />
      Image :
      <input
        name="image"
        placeholder="image link"
        value={listing.image}
        onChange={handleChange}
      />
      <br />
      <button type="submit">Edit</button>
    </form>
  );
}

export default EditListing;
